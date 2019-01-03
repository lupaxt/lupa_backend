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
    projectId: process.env.project_id || "wisdom-c02f4",
    clientEmail:
      process.env.client_email ||
      "firebase-adminsdk-a0yw7@wisdom-c02f4.iam.gserviceaccount.com",
    privateKey:
      process.env.private_key ||
      `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCbg82Or6ougu3F
GWMUZgY+3GsEuh1zlyWxXSXFTm7ELQHlRz/4b5+RCUfHKiyHVJp+BqQDzFRtajyN
6chjnX9v2bd8nk3rjDE6uI0HewgqwBF+EHwxO3fCMIdbhX+TSM0IQ/9wDN6SqtjX
gcroBZRzL0hfSdscGp6193zehvHv8zYoIyur20NWogyPUcdeE9A7zvRS9zGkH4jg
YRqJB9y5DT0gQOBoiQV8CebODjKrOoYWZ49nYBC0efpF9ItaxH/57uFTWkWIQNOh
cci3ajRMMbkGQnK50NrI1SmcdEeI6uTlboJ7bEza2bhywTIam9PUbXwcB/XfhLCA
7m6B8s4ZAgMBAAECggEAIIDUOjHR5mW8D1lmgXFvdbz46ySBGlMpcCARUGM7uGnV
vxd8sc6WsagYZfKVGvXeUl/N8PNIZBPzsw99MADPjU+aT4QAsi37bhP7eehHhTPe
lBQa+Ok+dwpQiBrnVp+9JrCbl05BSLNHngdFIuhjpg1oWW4kywNvT4X6BcJ7l5RQ
cNj3Uf4MOLHSDSS706d0Y2hM6X2VZOCRz6eATsjll8DlN4GEbfCNOYGt1CruIvTf
fOc9KDeeut93ZiTnkYw9JujjeWQxWxwsPEtyhYNnFI7Ghqk/O3KoOAaKILvwLfbY
H15FUwudymuf0Fx1yjxgfgL5ZI5EyZtskyEnIR6UOQKBgQDZsdlDiKo4qn1I4seb
/Xz6kq1AZDBGsyHWT70K5r+s3JNhggHu/a7LtP8QTEMUTCF0oL6JQoc6mGFq4900
eA/gJEcbyoba+IHJzzQOnu/ZAAFCz1n/bun+6Hv+njr1aS9H6zFpbc/ytaPco/E7
BIaFJ8OHkpM1Yx/rjD3BQFFrTQKBgQC24QknWwnTuHy9o0+kyWKzCBIs26OWWm3B
qXbOF/wh1PjtuuusSRvcPDpBoQTRITUTVS7UpT+S4jOPt68ARRAYuaEvi7EKpCBs
UNTRDnPSqLu3SuteMD5ESppV48lMG5VV3Bz1JQeke3k65CQv0JB5+u+ycNknsR9J
n1494VtP/QKBgQCSIA5dhaP1K4OzY/5m1+2HaOOAoH/DRUTGTXnwkllBGEKZpiHU
IVauiEzZzMcOHdgrKCcdjZmmHFjv3gpCyQCnDNLqdbS10S+Vnk8sLUWEHLu78+FO
U04gfD+W9vFOgA9rsBTX1w1JtuFKHoWzfuMpCDr4isvjfykS/G0Lhjfg1QKBgEqh
kXO/IkaFvlpBoEn2aVH4lDo8NAkyxCHJP5OhlCJWYHPb2TuI5la9OWT5ChcyPw+x
rpfXDBesOjCHXGJ2zLfaYV4e2tQl4JlzbzYVeMzaUSje6SiZ9X83Fr7AY7CsfQf5
+NNOFk1YmkOfQOlGav9smY8voF8jWEpaQEJuii4dAoGAb9cdnQs9q+6i0kID9ouY
FDNA8eysZ9/69PYcgDNDviIe2g3kafbHKwB8H+1N2IAGWYg//qDegfe/LuXqXqdq
VRZXrEAu8SWU7QQE/jBm3ol75U4Ra4m5AcrBeSbyLhSb07o17zdW8TqsBYzxcp2m
lFNrV2t0DILjsS7BubbcMNU=
-----END PRIVATE KEY-----`
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
