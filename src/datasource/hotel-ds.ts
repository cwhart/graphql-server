import { RESTDataSource } from 'apollo-datasource-rest';
import { Room } from '../model/room';
import * as _ from 'lodash';

export interface HotelAPIInterface {
    getRoom: (roomNumber: number) => Promise<Room>;
    getRooms: () => Promise<Room[]>;
}

export class HotelAPI extends RESTDataSource implements HotelAPIInterface {

    static ROOM_LIST_PATH = 'room/retrieveAll';
    static RETRIEVE_ROOM_PATH = 'room/retrieve/';

    constructor() {
        super();
        this.baseURL = 'http://localhost:8080/';
    }

    public async getRooms(): Promise<Room[]> {
        const response = await this.get<Room[]>(
            `${this.baseURL + HotelAPI.ROOM_LIST_PATH}`);

        //if (!_.isEmpty(response)) {
            return response;
        //}
        //return null;
    }

    public async getRoom(roomNumber: number): Promise<Room> {
        console.log('roomNumber: ' + roomNumber)
        const response = await this.get<Room>(
            `${this.baseURL + HotelAPI.RETRIEVE_ROOM_PATH}/${roomNumber}`);

        //if (!_.isEmpty(response)) {
            return response;
            //return this.openBillsReducer(response);
        //}
        //return null;
    }

    // private roomReducer(openBillsResponse: OpenBillsResponse): OpenBill[] {
    //     const receivablesDetails: OpenBill[] = [];
    //     const policyDetails: OpenBillPolicy[] = [];
    //     openBillsResponse.billingEntitiesRollup.map(
    //         (billingEntity) => {
    //             const subAccountNumber = billingEntity.subaccountNumber;
    //             const billedTo =  billingEntity.billTo;
    //             invoiceTotalDue: billingEntity.totalDue;
    //             billingEntity.openBills.map(
    //                 receivablesDetail => receivablesDetails.push({
    //                     subAccountNumber,
    //                     invoiceNumber: receivablesDetail.invoiceNumber  || '',
    //                     invoiceDueDate: receivablesDetail.invoiceDueDate,
    //                     customerBalDue: parseFloat(receivablesDetail.customerBalDue),
    //                     policies: receivablesDetail.policyList,
    //                 }),
    //             );
    //         },
    //     );
    //     return receivablesDetails;
    // }

    //
    //
    // private paymentsReducer(paymentsResponse: PaymentHistoryDetailsResponse): PaymentHistoryDetail[] {
    //     const paymentHistoryDetails: PaymentHistoryDetail[] = [];
    //     paymentsResponse.billingEntities.map(
    //         (billingEntity) => {
    //             const subAccountNumber = billingEntity.subaccountNumber;
    //             billingEntity.paymentHistoryDetails.map(
    //                 paymentHistoryDetail => paymentHistoryDetails.push({
    //                     subAccountNumber,
    //                     paymentDate: paymentHistoryDetail.paymentDate,
    //                     paymentAmount: parseFloat(paymentHistoryDetail.paymentAmount),
    //                     paymentDescription: paymentHistoryDetail.paymentDescription,
    //                 }),
    //             );
    //         },
    //     );
    //     return paymentHistoryDetails;
    // }

}
