import { Room } from '../model/room';
 import { rooms } from "../server";
import { DataSourcesType } from '../model/datasources';

export const HOTEL_RESOLVER = {
    Query: {
        // room: (parent: any, { id }: Room) => {
        //     return rooms[id-1];
        // },
        // rooms: () => {
        //     return rooms;
        // },

        room: async(__: any, source: Room, { dataSources }: DataSourcesType) => {
            //logger.log('debug', 'Resolving openBills with an account number %s', source.accountNumber);
            let thisRoom;

            try {
                thisRoom = await dataSources.hotelAPI.getRoom(source.roomNumber);
            } catch (error) {
                // logger.log('error', error);
                return error;
            }

            //logger.log('debug', 'Response for openBills: ', openBills);
            return thisRoom;
        },



        rooms: async(_: any, __: any, { dataSources }: DataSourcesType) => {
            //logger.log('debug', 'Resolving openBills with an account number %s', source.accountNumber);
            let roomsREST;

            try {
                roomsREST = await dataSources.hotelAPI.getRooms();
            } catch (error) {
                // logger.log('error', error);
                return error;
            }

            //logger.log('debug', 'Response for openBills: ', openBills);
            return roomsREST;
        },
    },
};
