import connectDB from "./db/db.js";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express"
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

import createApolloGraphqlServer from "./graphql/index.js";

async function startServer() {
  app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

  app.listen(4000, () => {
    console.log(`🚀 Server ready at 4000`);
  });
}
startServer();
