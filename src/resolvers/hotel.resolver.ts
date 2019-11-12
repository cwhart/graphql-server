import { Room } from '../model/room';
import { rooms } from "../server";

export const HOTEL_RESOLVER = {
    Query: {
        room: (parent: any, { id }: Room) => {
            return rooms[id-1];
        },
        rooms: () => {
            return rooms;
        },
    },
};
