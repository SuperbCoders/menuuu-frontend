import {Api} from "./index";
import {ResponseWithPagination} from "./interface";

export interface GetMenuResponse {
    id: number;
}

const MENU_API_ROUTE = 'menu/';

export const GET_MENU = () => {
    return Api.get<ResponseWithPagination<GetMenuResponse>>(MENU_API_ROUTE);
};