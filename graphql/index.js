import { ApolloServer } from "@apollo/server";
import { Todo } from "./todo/index.js";

const typeDefs = `#graphql

${Todo.typeDefs}

type Query {
   
}

type Mutation {
   
}
`;



const resolvers = {
  Query: {
    ...Todo.resolvers.queries,
  },
  Mutation: {
    ...Todo.resolvers.mutations,
  },
};

// console.log(resolvers);
async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

// export default createApolloGraphqlServer;
export default createApolloGraphqlServer;
