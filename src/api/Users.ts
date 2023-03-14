import {Api, UnauthorizedApi} from "./index";
import {ArrayResponse, RestaurantInterface} from "./interface";

export interface LoginResponse {
    detail: string;
    token: string;
    user: number;
}

const USERS_API_ROUTE = 'users/';

export const LOGIN = (username: string, password: string,) => {
    return UnauthorizedApi.post<LoginResponse>(`${USERS_API_ROUTE}login/`, {
        username,
        password,
    });
};

export const GET_MY_RESTAURANTS = () => {
    return Api.get<ArrayResponse<RestaurantInterface>>(`${USERS_API_ROUTE}my_restaurants/`);
};