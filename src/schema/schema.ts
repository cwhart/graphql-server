import { gql } from 'apollo-server-express';

export const schema = gql`
    type Query {
        rooms: [Room]
        room(id: ID!): Room
    }
    type Room {
        id: ID!
        roomNumber: Int!
        occupancy: Int
        type: String!
    }
`;
