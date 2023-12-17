require("./db/db");
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const {expressMiddleware} = require('@apollo/server/express4')
const  express = require('express');
const app = express();
const cors = require('cors');
const { resolvers } = require('./graphql/resolvers/resolvers');
const { typeDefs } = require('./graphql/typeDefs/schema');
const jwt = require('jsonwebtoken');
const { userAuth } = require('./middleware/authMiddleware');
async function  startServer()   {
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
    
    
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    app.use(cors());
    app.use(express.json());
    app.use(
      '/graphql',
      expressMiddleware(server
        // ,
      //    {
      //   context: async ({ req }) => {
      //     const token = req.headers.authorization || '';
      //     const userTokenVerify = jwt.verify(token, 'somesupersecretkey');
      //     const user = await userAuth(userTokenVerify) ;
      //     return { user };
      //     // console.log(userTokenVerify);
      //     // return null;
      //   },
      // }
      )
    );
    

    app.listen(40001, () => {

      console.log(`🚀 Server ready at 4000`);
    });
    
    
}
startServer();
