require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { loadSchemaSync } = require('@graphql-tools/load') ;
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');

const schema = loadSchemaSync(__dirname + '/schema.graphql', { loaders: [new GraphQLFileLoader()] });
const resolvers = require("./src/resolvers")

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const server = new ApolloServer({
  schema: schemaWithResolvers
})

const app = express();
server.applyMiddleware({ app });
const port = process.env.PORT || 5000;

const {mongo} = require("./src/utils/mongooseConnect");

mongo.on("Connected", () => {
  console.log("We are connected with the DB!")
});

app.get("/", (req, res) => {
  res.send("Working, please come back soon")
});

app.listen({port}, () => {
  console.log(`We are online on port ${port}${server.graphqlPath}`)
});