const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./resolvers/index");
const jwt = require("jsonwebtoken");
const connectDB = require("./config/db");

require("dotenv").config();
connectDB();

const contextMiddleware = ({ req }) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      return { user };
    } catch (err) {
      throw new Error("Invalid token");
    }
  }
  return {};
};

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: contextMiddleware,
  });

  await server.start();
  server.applyMiddleware({ app });

  await mongoose.connectDB;

  app.listen(3000, () => {
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
  });
};

startServer();
