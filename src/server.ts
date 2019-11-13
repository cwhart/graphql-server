import cors from 'cors';
import express from 'express';
import  _ from 'lodash';
import { schema } from './schema/schema'
import { ApolloServer, gql } from 'apollo-server-express';
import {HOTEL_RESOLVER} from "./resolvers/hotel.resolver";
import { Room } from './model/room'
import {HotelAPI} from "./datasource/hotel-ds";

const app = express();
app.use(cors());

const resolvers = _.merge(
    HOTEL_RESOLVER,
);

  export let rooms = [
     {
      id: 1,
      roomNumber:101,
      type: 'King',
      occupancy: 4
    },
     {
      id: 2,
      type: 'Queen',
      roomNumber: 201,
      occupancy: 2
    },
];
  //const room = rooms[1];



const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
    dataSources: () => {
        return {
            hotelAPI: new HotelAPI(),
        };
    }
});
server.applyMiddleware({ app, path: '/graphql' });
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
