const {GraphQLServer} = require("graphql-yoga");
const {prisma} = require("./generated/prisma-client");
const {getUserId} = require("./utils");

//TODO firebase verifytoken


const followGroup = async (parent, {group, role = "member"}, context) => {
    const userId = await getUserId(context);
    const userHasRole = await context.prisma.$exists.role({
        AND: [
            {
                user: await context.prisma.user({id: userId}) //watch it.... promises are TRUE
            },
            {
                group: await context.prisma.group({id: group})
            }
        ]
    });

    console.log("userhasRole", userHasRole);

    if (userHasRole) {
        return await context.prisma.group({id: group});
    }

    const _role = await context.prisma.createRole({
        group: {connect: {id: group}},
        role,
        user: {
            connect: {id: userId}
        }
    });
    return await context.prisma.updateGroup({
        where: {id: group},
        data: {
            followers: {
                connect: {id: userId}
            }
        }
    });
}

const deleteGroup = async (parent, {group}, context) => {
    const userId = await getUserId(context);


    //TODO match the user with the group
    const groupRoleForUser = await context.prisma.roles({
        where: {
            AND: [{
                group: {
                    id: group
                },
                user: {
                    id: userId
                }
            }]
        }
    });
    // console.log(groupRoleForUser, "grouprole")
    if (!groupRoleForUser.length) return Error("user couldn't be matched with group")
    if (groupRoleForUser[0].role === "creator" || groupRoleForUser[0].role === "admin") {
        return await context.prisma.deleteGroup({id: group})
    }

    return Error("You don't have permission (admin or creator) to delete this group")
}
const createGroup = async (parent, {name, description}, context) => {
    console.log("running createGROUP!", name, description)
    const userId = await getUserId(context);
    if (!userId) throw Error("you have to be logged in to create a group")

    //TODO add a first follow to User (eg follow)
    //
    // await context.prisma.createRole({
    //     group: {connect: {id: group}},
    //     role,
    //     user: {
    //         connect: {id: userId}
    //     }
    // });
    const g = await context.prisma.createGroup({name, description});
    const groupnew = await followGroup(parent, {group: g.id, role: 'creator'}, context)
    console.log("groupID HERE", g, "g", g.id, "groupnew", groupnew)
    return g;
}

const unfollowGroup = async (parent, {group}, context) => {
    const userId = await getUserId(context);
    return await context.prisma.updateGroup({
        where: {id: group},
        data: {
            followers: {
                disconnect: {id: userId}
            }
        }
    });
}

const addGroupToReview = async (parent, {review, group}, {prisma}) => {
                    const groupIsInReview = await prisma
                        .review({id: review})
                        .groups({where: {id: group}});

                    if (groupIsInReview.length > 0) {
                        return await prisma.review({id: review});
                    }
                    return await prisma.updateReview({
                        where: {id: review},
                        data: {
                            groups: {
                                connect: {id: group}
                            }
                        }
                    });
                }

const reviewsForGroups = async (parent, {groups}, {prisma}) => await prisma.reviews({where: {groups_some: {id_in: groups}}})

const reviewsForUserGroups = async (parent, args, context) => {
    const userId = await getUserId(context);

    // const groupsObj = await context.prisma.groups({where: {follower: {id: userId}}})
    const groupsObj = await context.prisma.user({id: userId}).follows();
    console.log( "follows", groupsObj)
    // where: {follower: {id: userId}}})
    const groups = groupsObj.map(g => g.id);
    return await reviewsForGroups(parent, {groups}, context);

}
const deleteReview = async (parent, {id}, context) => {
    const userId = await getUserId(context);

    //review belongs to user:
    const author = await context.prisma.review({id}).author()

    if (author.id === userId) {
        return await context.prisma.deleteReview({id})
    }
    return Error("Are you the author of this review?")

}

const reviewsSubNews = (parent, {id}, context, info) => {
    return context.prisma.$subscribe.review({
        where: {
            mutation_in: ["CREATED", "UPDATED", "DELETED"],

        }


    }).node()

    /* where: {
             mutation_in: ["CREATED", "UPDATED", "DELETED"],

         }}).node()*/
};

const reviewsSub = {
    subscribe: reviewsSubNews,
    resolve: payload => {
        return payload
    },
}

const resolvers = {
        Subscription: {
            /*Rather than returning any data directly, they return an AsyncIterator which subsequently is
            used by the GraphQL server to push the event data to the client.
Subscription resolvers are wrapped inside an object and need to be provided as the value
for a subscribe field. You also need to provide another field called resolve that actually
returns the data from the data emitted by the AsyncIterator.*/
            reviewsSub,

        },
        Query: {
            user: (parent, {fibauid}, {prisma}) => prisma.user({fibauid}),
            userByName: (parent, {name}, context) => context.prisma.user({name}),
            groupByName: (parent, {name}, context) => context.prisma.group({name}),
            getRoles: async (parent, {userId}, context) => {

                if (!userId) {
                    userId = await getUserId(context)
                }
                return await
                    context.prisma.user({id: userId}).roles();

            },
            group: (parent, {groupId}, {prisma}) => prisma.group({id: groupId}),
            groups:
                async (parent, {userId}, {prisma}, info) => {
                    return userId
                        ? await prisma.groups(
                            {
                                where: {
                                    followers_every: {
                                        id: userId
                                    }
                                }
                            },
                            info
                        )
                        : await prisma.groups();
                },
            review:
                async (parent, {id}, {prisma}) => prisma.review({id}),
            reviews:
                async (parent, {userId, username}, {prisma}, info) => {
                    if (userId) {
                        return await prisma.reviews(
                            {
                                where: {
                                    author: {id: userId}
                                }
                            });
                    }

                    if (username) {
                        return await prisma.reviews(
                            {where: {author: {name: username}}});
                    }

                    return await prisma.reviews();
                },
            reviewsForGroups,
            reviewsForUserGroups,
            reviewsForTarget:
                async (
                    parent,
                    {target, targetType = "url"},
                    {prisma}
                ) => {
                    return await prisma.reviews({
                        where: {
                            target
                        }
                    });
                },

        },
        Mutation: {

            createUser: (parent, {email, name, fibauid}, context) =>
                context.prisma.createUser({name, email, fibauid}),
            // updateUserName: (parent, {name}, context) => context.prisma.updateUser({id, name})
            deleteReview,
            createReview:
                async (
                    parent,
                    {targetType = "webpage", target, description, title = "", groups =[], emoji},
                    context
                ) => {
                    //TODO Yup check if URL, if not ==> targetType = "Review"
                    const userId = await getUserId(context);
                    console.log(userId, "userID resolver");
                    const review = await context.prisma.createReview({
                        target,
                        title,
                        targetType,
                        description,
                        emoji,
                        author: {
                            connect: {
                                id: userId
                            }
                        }
                    });
                    if (targetType === "review" || targetType === "comment") {
                        await context.prisma.updateReview({
                            where: {id: target},
                            data: {
                                comments: {
                                    connect: {id: review.id}
                                }
                            }
                        })
                    }

                    if (groups.length > 0) {
                        groups.forEach(async group => {
                            try {
                                await addGroupToReview(parent, {group: group, review: review.id}, context)

                            } catch (err) {
                                console.log('err', err)
                            }

                        })
                    }

                
                    return review
                },
            createGroup,
            followGroup,
            unfollowGroup,
            deleteGroup,
            addGroupToReview,
            removeGroupFromReview:
                async (parent, {review, group}, {prisma}) => {
                    return await prisma.updateReview({
                        where: {id: review},
                        data: {
                            groups: {
                                disconnect: {id: group}
                            }
                        }
                    });
                }
        }
        ,

        /*   deletePost(parent, { id }, context) {
              return context.prisma.deletePost({ id });
            }, */
        /*    publish(parent, { id }, context) {
              return context.prisma.updatePost({
                where: { id },
                data: { published: true }
              });
            } */
        Review: {
            author: ({id}, args, context) => context.prisma.review({id}).author(),
            groups:
                ({id}, args, context) => context.prisma.review({id}).groups(),
            id:
                ({id}, args, context) => context.prisma.review({id}).id(),
            comments:
                ({id}, args, context) => context.prisma.review({id}).comments(),
        }
        ,
        User: {
            reviews: ({id}, args, context) => {
                return context.prisma.user({id}).reviews();
            },
            follows:({id}, args, context) => context.prisma.user({id}).follows(),
            roles:
                ({id}, args, context) => context.prisma.user({id}).roles()
        }
        ,
        Role: {
            user: ({id}, args, context) => context.prisma.role({id}).user(),
            group:
                ({id}, args, context) => context.prisma.role({id}).group(),
            role:
                ({id}, args, context) => context.prisma.role({id}).role()
        }
        ,
        Group: {
            followers: ({id}, args, context) =>
                context.prisma.group({id}).followers(),
            reviews:
                ({id}, args, context) => context.prisma.group({id}).reviews(),
            id:
                ({id}, args, context) => context.prisma.group({id}).id()

        }
    }
;

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        };
    }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
