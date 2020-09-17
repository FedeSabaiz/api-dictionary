const PoemResolver = require("./PoemResolvers");
const WordResolver = require("./WordResolvers");

module.exports = {
  Query: {
    ...PoemResolver.Query,
    ...WordResolver.Query
  },
  Mutation: {
    ...PoemResolver.Mutation,
    ...WordResolver.Mutation
  }
};  