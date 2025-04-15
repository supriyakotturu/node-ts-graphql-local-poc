import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { readFileSync } from "fs";
import { fileURLToPath } from 'url';
import {dirname, resolve} from "path";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers"; 
import { ListingAPI } from "./datasources/listing-api";
import { PlanetsAPI } from "./datasources/planets-api";

 

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeDefs = gql(
    readFileSync(resolve(__dirname, "schema.graphql"), {
      encoding: "utf-8",
    })
);

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers  });
  const {url} = await startStandaloneServer(server, {
    context: async() => {
      const {cache} = server
      return {
        dataSources: {
          listingAPI: new ListingAPI({cache}),
          planetAPI: new PlanetsAPI({cache})
        }
      }
    },
    listen: { port: 4000 }
    })
  console.log(`server is running. URL: ${url} `)

  // Add this temporarily to debug
console.log('Environment variables:', {
  API_URL: process.env.API_URL,
  NODE_ENV: process.env.NODE_ENV
});

}

startApolloServer()