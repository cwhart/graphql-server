import { gql } from 'apollo-server-express';

export const schema = gql`
    type Query {
        rooms: [Room]
        room(roomNumber: Int!): Room
    }
    type Room {
        id: ID!
        roomNumber: Int!
        occupancy: Int
        type: String!
    }
`;
