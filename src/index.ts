import dotenv from "dotenv";
dotenv.config();

import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
    // authChecker,
  });

  const app = express();
  app.use(cookieParser());
  const server = new ApolloServer({
    schema,
    context: (ctx) => ctx,
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();

  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log("App is listening on https://localhost:4000");
  });
}

bootstrap();
