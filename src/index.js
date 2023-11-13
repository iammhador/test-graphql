"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var schema_1 = require("./gql/schema");
var resolvers_1 = require("./gql/resolvers");
var server = new server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
var url = (await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
})).url;
console.log("\uD83D\uDE80  Server ready at: ".concat(url));
