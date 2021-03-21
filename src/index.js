require("dotenv").config();

import express from "express";
import consola from "consola";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typedefs";
import resolvers from "./graphql/resolvers";

const { NODE_ENV, DB, APP_PORT } = process.env;

// Init App
const app = express();
app.disable("x-powered-by");

//Init Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: NODE_ENV !== "production",
});

server.applyMiddleware({ app, cors: false });

//Start App
const startApp = async () => {
  try {
    // await mongoose.connect(DB, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // consola.success({
    //   message: `Successfully Connected to DB\n${DB}`,
    //   badge: true,
    // });
    app.listen({ port: APP_PORT }, () => {
      consola.success({
        message: `Apollo Server started on port:\nhttp://localhost:${APP_PORT}${server.graphqlPath}`,
        badge: true,
      });
    });
  }
  catch (error) {
    consola.error({
      message: `Unable to connect to server\n ${error.message}`,
      badge: true,
    });
  }
};

startApp();
