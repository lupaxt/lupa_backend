// const jwt = require('jsonwebtoken')
const admin = require("firebase-admin");

/* const bodyParser = require("body-parser");
const isEmpty = require("is-empty");
const read = require("node-readability");
const scrape = require("html-metadata"); */

//fails here. No metadata found
//throws error

//heroku: take port from ENV
// const port = process.env.PORT || 3000;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.project_id,
    clientEmail: process.env.client_email,
    privateKey:process.env.private_key
  }),
  databaseURL: "https://wisdom-c02f4.firebaseio.com"
});

function verifyUser(token) {
  return new Promise(function(resolve, reject) {
    admin
      .auth()
      .verifyIdToken(token)
      .then(resolve) //decodedtoken
      .catch(err => reject(err));
  });
}

async function getUserId(context, info) {
  // console.log('context', context)
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    // console.log('backendToken', token)
    // const { userId } = jwt.verify(token, process.env.APP_SECRET)
    const {uid} = await verifyUser(token);

    console.log(uid, "userID")
    const user = await context.prisma.user({ fibauid: uid });
    console.log(user, "useridoo");
    return user.id;
  }

  throw new AuthError();
}

class AuthError extends Error {
  constructor() {
    super("User not logged in OR not authorized");
  }
}

module.exports = {
  getUserId,
  AuthError
};
