import {Api} from "./index";
import {RestaurantStaffInterface} from "./interface";

const STAFF_API_ROUTE = 'restaurant_staff/';

export const CREATE_STAFF = (data: RestaurantStaffInterface) => {
    return Api.post<RestaurantStaffInterface>(STAFF_API_ROUTE, data);
};