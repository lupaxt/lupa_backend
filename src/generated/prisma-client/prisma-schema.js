module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGroup {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Group {
  id: ID!
  name: String!
  createdAt: DateTime!
  description: String
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  description: String
  followers: UserCreateManyWithoutFollowsInput
  reviews: ReviewCreateManyWithoutGroupsInput
}

input GroupCreateManyWithoutFollowersInput {
  create: [GroupCreateWithoutFollowersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutReviewsInput {
  create: [GroupCreateWithoutReviewsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneInput {
  create: GroupCreateInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutFollowersInput {
  name: String!
  description: String
  reviews: ReviewCreateManyWithoutGroupsInput
}

input GroupCreateWithoutReviewsInput {
  name: String!
  description: String
  followers: UserCreateManyWithoutFollowsInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  description: String
}

input GroupScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [GroupScalarWhereInput!]
  OR: [GroupScalarWhereInput!]
  NOT: [GroupScalarWhereInput!]
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateDataInput {
  name: String
  description: String
  followers: UserUpdateManyWithoutFollowsInput
  reviews: ReviewUpdateManyWithoutGroupsInput
}

input GroupUpdateInput {
  name: String
  description: String
  followers: UserUpdateManyWithoutFollowsInput
  reviews: ReviewUpdateManyWithoutGroupsInput
}

input GroupUpdateManyDataInput {
  name: String
  description: String
}

input GroupUpdateManyMutationInput {
  name: String
  description: String
}

input GroupUpdateManyWithoutFollowersInput {
  create: [GroupCreateWithoutFollowersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutFollowersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutFollowersInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithoutReviewsInput {
  create: [GroupCreateWithoutReviewsInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutReviewsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutReviewsInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithWhereNestedInput {
  where: GroupScalarWhereInput!
  data: GroupUpdateManyDataInput!
}

input GroupUpdateOneInput {
  create: GroupCreateInput
  update: GroupUpdateDataInput
  upsert: GroupUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutFollowersDataInput {
  name: String
  description: String
  reviews: ReviewUpdateManyWithoutGroupsInput
}

input GroupUpdateWithoutReviewsDataInput {
  name: String
  description: String
  followers: UserUpdateManyWithoutFollowsInput
}

input GroupUpdateWithWhereUniqueWithoutFollowersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutFollowersDataInput!
}

input GroupUpdateWithWhereUniqueWithoutReviewsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutReviewsDataInput!
}

input GroupUpsertNestedInput {
  update: GroupUpdateDataInput!
  create: GroupCreateInput!
}

input GroupUpsertWithWhereUniqueWithoutFollowersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutFollowersDataInput!
  create: GroupCreateWithoutFollowersInput!
}

input GroupUpsertWithWhereUniqueWithoutReviewsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutReviewsDataInput!
  create: GroupCreateWithoutReviewsInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  followers_every: UserWhereInput
  followers_some: UserWhereInput
  followers_none: UserWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  author: User!
  target: String!
  targetType: String!
  comments(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  updatedAt: DateTime!
  createdAt: DateTime!
  title: String
  emoji: String
  description: String
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  author: UserCreateOneWithoutReviewsInput!
  target: String!
  targetType: String
  comments: ReviewCreateManyInput
  groups: GroupCreateManyWithoutReviewsInput
  title: String
  emoji: String
  description: String
}

input ReviewCreateManyInput {
  create: [ReviewCreateInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutAuthorInput {
  create: [ReviewCreateWithoutAuthorInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutGroupsInput {
  create: [ReviewCreateWithoutGroupsInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutAuthorInput {
  target: String!
  targetType: String
  comments: ReviewCreateManyInput
  groups: GroupCreateManyWithoutReviewsInput
  title: String
  emoji: String
  description: String
}

input ReviewCreateWithoutGroupsInput {
  author: UserCreateOneWithoutReviewsInput!
  target: String!
  targetType: String
  comments: ReviewCreateManyInput
  title: String
  emoji: String
  description: String
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  target_ASC
  target_DESC
  targetType_ASC
  targetType_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  emoji_ASC
  emoji_DESC
  description_ASC
  description_DESC
}

type ReviewPreviousValues {
  id: ID!
  target: String!
  targetType: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  title: String
  emoji: String
  description: String
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  target: String
  target_not: String
  target_in: [String!]
  target_not_in: [String!]
  target_lt: String
  target_lte: String
  target_gt: String
  target_gte: String
  target_contains: String
  target_not_contains: String
  target_starts_with: String
  target_not_starts_with: String
  target_ends_with: String
  target_not_ends_with: String
  targetType: String
  targetType_not: String
  targetType_in: [String!]
  targetType_not_in: [String!]
  targetType_lt: String
  targetType_lte: String
  targetType_gt: String
  targetType_gte: String
  targetType_contains: String
  targetType_not_contains: String
  targetType_starts_with: String
  targetType_not_starts_with: String
  targetType_ends_with: String
  targetType_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  emoji: String
  emoji_not: String
  emoji_in: [String!]
  emoji_not_in: [String!]
  emoji_lt: String
  emoji_lte: String
  emoji_gt: String
  emoji_gte: String
  emoji_contains: String
  emoji_not_contains: String
  emoji_starts_with: String
  emoji_not_starts_with: String
  emoji_ends_with: String
  emoji_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateDataInput {
  author: UserUpdateOneRequiredWithoutReviewsInput
  target: String
  targetType: String
  comments: ReviewUpdateManyInput
  groups: GroupUpdateManyWithoutReviewsInput
  title: String
  emoji: String
  description: String
}

input ReviewUpdateInput {
  author: UserUpdateOneRequiredWithoutReviewsInput
  target: String
  targetType: String
  comments: ReviewUpdateManyInput
  groups: GroupUpdateManyWithoutReviewsInput
  title: String
  emoji: String
  description: String
}

input ReviewUpdateManyDataInput {
  target: String
  targetType: String
  title: String
  emoji: String
  description: String
}

input ReviewUpdateManyInput {
  create: [ReviewCreateInput!]
  update: [ReviewUpdateWithWhereUniqueNestedInput!]
  upsert: [ReviewUpsertWithWhereUniqueNestedInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyMutationInput {
  target: String
  targetType: String
  title: String
  emoji: String
  description: String
}

input ReviewUpdateManyWithoutAuthorInput {
  create: [ReviewCreateWithoutAuthorInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithoutGroupsInput {
  create: [ReviewCreateWithoutGroupsInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutGroupsInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateWithoutAuthorDataInput {
  target: String
  targetType: String
  comments: ReviewUpdateManyInput
  groups: GroupUpdateManyWithoutReviewsInput
  title: String
  emoji: String
  description: String
}

input ReviewUpdateWithoutGroupsDataInput {
  author: UserUpdateOneRequiredWithoutReviewsInput
  target: String
  targetType: String
  comments: ReviewUpdateManyInput
  title: String
  emoji: String
  description: String
}

input ReviewUpdateWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutAuthorDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutGroupsInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutGroupsDataInput!
}

input ReviewUpsertWithWhereUniqueNestedInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateDataInput!
  create: ReviewCreateInput!
}

input ReviewUpsertWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutAuthorDataInput!
  create: ReviewCreateWithoutAuthorInput!
}

input ReviewUpsertWithWhereUniqueWithoutGroupsInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutGroupsDataInput!
  create: ReviewCreateWithoutGroupsInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  target: String
  target_not: String
  target_in: [String!]
  target_not_in: [String!]
  target_lt: String
  target_lte: String
  target_gt: String
  target_gte: String
  target_contains: String
  target_not_contains: String
  target_starts_with: String
  target_not_starts_with: String
  target_ends_with: String
  target_not_ends_with: String
  targetType: String
  targetType_not: String
  targetType_in: [String!]
  targetType_not_in: [String!]
  targetType_lt: String
  targetType_lte: String
  targetType_gt: String
  targetType_gte: String
  targetType_contains: String
  targetType_not_contains: String
  targetType_starts_with: String
  targetType_not_starts_with: String
  targetType_ends_with: String
  targetType_not_ends_with: String
  comments_every: ReviewWhereInput
  comments_some: ReviewWhereInput
  comments_none: ReviewWhereInput
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  emoji: String
  emoji_not: String
  emoji_in: [String!]
  emoji_not_in: [String!]
  emoji_lt: String
  emoji_lte: String
  emoji_gt: String
  emoji_gte: String
  emoji_contains: String
  emoji_not_contains: String
  emoji_starts_with: String
  emoji_not_starts_with: String
  emoji_ends_with: String
  emoji_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Role {
  id: ID!
  user: User!
  group: Group
  createdAt: DateTime!
  updatedAt: DateTime!
  role: String!
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  user: UserCreateOneWithoutRolesInput!
  group: GroupCreateOneInput
  role: String
}

input RoleCreateManyWithoutUserInput {
  create: [RoleCreateWithoutUserInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateWithoutUserInput {
  group: GroupCreateOneInput
  role: String
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  role_ASC
  role_DESC
}

type RolePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: String!
}

input RoleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  AND: [RoleScalarWhereInput!]
  OR: [RoleScalarWhereInput!]
  NOT: [RoleScalarWhereInput!]
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateInput {
  user: UserUpdateOneRequiredWithoutRolesInput
  group: GroupUpdateOneInput
  role: String
}

input RoleUpdateManyDataInput {
  role: String
}

input RoleUpdateManyMutationInput {
  role: String
}

input RoleUpdateManyWithoutUserInput {
  create: [RoleCreateWithoutUserInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [RoleUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [RoleScalarWhereInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
}

input RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput!
  data: RoleUpdateManyDataInput!
}

input RoleUpdateWithoutUserDataInput {
  group: GroupUpdateOneInput
  role: String
}

input RoleUpdateWithWhereUniqueWithoutUserInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateWithoutUserDataInput!
}

input RoleUpsertWithWhereUniqueWithoutUserInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateWithoutUserDataInput!
  create: RoleCreateWithoutUserInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  group: GroupWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  fibauid: String!
  name: String!
  email: String!
  createdAt: DateTime!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  password: String
  follows(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
  description: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  fibauid: String!
  name: String!
  email: String!
  reviews: ReviewCreateManyWithoutAuthorInput
  password: String
  follows: GroupCreateManyWithoutFollowersInput
  roles: RoleCreateManyWithoutUserInput
  description: String
}

input UserCreateManyWithoutFollowsInput {
  create: [UserCreateWithoutFollowsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRolesInput {
  create: UserCreateWithoutRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFollowsInput {
  fibauid: String!
  name: String!
  email: String!
  reviews: ReviewCreateManyWithoutAuthorInput
  password: String
  roles: RoleCreateManyWithoutUserInput
  description: String
}

input UserCreateWithoutReviewsInput {
  fibauid: String!
  name: String!
  email: String!
  password: String
  follows: GroupCreateManyWithoutFollowersInput
  roles: RoleCreateManyWithoutUserInput
  description: String
}

input UserCreateWithoutRolesInput {
  fibauid: String!
  name: String!
  email: String!
  reviews: ReviewCreateManyWithoutAuthorInput
  password: String
  follows: GroupCreateManyWithoutFollowersInput
  description: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  fibauid_ASC
  fibauid_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  password_ASC
  password_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  fibauid: String!
  name: String!
  email: String!
  createdAt: DateTime!
  password: String
  description: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fibauid: String
  fibauid_not: String
  fibauid_in: [String!]
  fibauid_not_in: [String!]
  fibauid_lt: String
  fibauid_lte: String
  fibauid_gt: String
  fibauid_gte: String
  fibauid_contains: String
  fibauid_not_contains: String
  fibauid_starts_with: String
  fibauid_not_starts_with: String
  fibauid_ends_with: String
  fibauid_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  fibauid: String
  name: String
  email: String
  reviews: ReviewUpdateManyWithoutAuthorInput
  password: String
  follows: GroupUpdateManyWithoutFollowersInput
  roles: RoleUpdateManyWithoutUserInput
  description: String
}

input UserUpdateManyDataInput {
  fibauid: String
  name: String
  email: String
  password: String
  description: String
}

input UserUpdateManyMutationInput {
  fibauid: String
  name: String
  email: String
  password: String
  description: String
}

input UserUpdateManyWithoutFollowsInput {
  create: [UserCreateWithoutFollowsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutRolesInput {
  create: UserCreateWithoutRolesInput
  update: UserUpdateWithoutRolesDataInput
  upsert: UserUpsertWithoutRolesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFollowsDataInput {
  fibauid: String
  name: String
  email: String
  reviews: ReviewUpdateManyWithoutAuthorInput
  password: String
  roles: RoleUpdateManyWithoutUserInput
  description: String
}

input UserUpdateWithoutReviewsDataInput {
  fibauid: String
  name: String
  email: String
  password: String
  follows: GroupUpdateManyWithoutFollowersInput
  roles: RoleUpdateManyWithoutUserInput
  description: String
}

input UserUpdateWithoutRolesDataInput {
  fibauid: String
  name: String
  email: String
  reviews: ReviewUpdateManyWithoutAuthorInput
  password: String
  follows: GroupUpdateManyWithoutFollowersInput
  description: String
}

input UserUpdateWithWhereUniqueWithoutFollowsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowsDataInput!
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput!
  create: UserCreateWithoutRolesInput!
}

input UserUpsertWithWhereUniqueWithoutFollowsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowsDataInput!
  create: UserCreateWithoutFollowsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fibauid: String
  fibauid_not: String
  fibauid_in: [String!]
  fibauid_not_in: [String!]
  fibauid_lt: String
  fibauid_lte: String
  fibauid_gt: String
  fibauid_gte: String
  fibauid_contains: String
  fibauid_not_contains: String
  fibauid_starts_with: String
  fibauid_not_starts_with: String
  fibauid_ends_with: String
  fibauid_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  follows_every: GroupWhereInput
  follows_some: GroupWhereInput
  follows_none: GroupWhereInput
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  fibauid: String
  name: String
  email: String
}
`
      }
    