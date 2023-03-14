import {Api} from "./index";
import {RestaurantInterface} from "./interface";

const RESTAURANTS_API_ROUTE = 'restaurants/';

export const CREATE_RESTAURANT = (data: RestaurantInterface) => {
    return Api.post<RestaurantInterface>(RESTAURANTS_API_ROUTE, data);
};