"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://lupabetadb-aa4c879b2f.herokuapp.com/`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
