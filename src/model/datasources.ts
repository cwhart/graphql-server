import { HotelAPIInterface } from '../datasource/hotel-ds';

export interface DataSources {
    hotelAPI: HotelAPIInterface;
}

export interface DataSourcesType {
    dataSources: DataSources;
}
