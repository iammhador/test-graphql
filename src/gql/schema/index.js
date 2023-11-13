"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = "#graphql\n  type Book {\n    title: String\n    author: String\n  }\n  \n  type Query {\n    books: [Book]\n  }\n";
