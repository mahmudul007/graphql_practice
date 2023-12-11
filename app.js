const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
async function  server()   {
    const books = [
        {
          title: 'The Awakening',
          author: {
            name: 'Kate Chopin',       
          },
          
        },
        {
          title: 'City of Glass',
          author:{
            name: 'Paul Auster',        
          },
        },
      ];
    const typeDefs = `#graphql
    
      type Book {
        title: String
        author: Author

      }
      type Author {
        name: String
        books: [Book]
      }
    
    
      type Query {
        books: [Book]
      }
    `;
    const resolvers = {
        Author: {
            books: () => books,
            },
        Query: {
          books: () => books,
        },
      };
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀 Server ready at ${url}`);
    
}
server();
