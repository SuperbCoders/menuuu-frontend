import {UnauthorizedApi} from "./index";

export interface LoginResponseData {
    detail: string;
    token: string;
    user: number;
}

const USERS_API_ROUTE = 'users';

export const LOGIN = (username: string, password: string,) => {
    return UnauthorizedApi.post<LoginResponseData>(`${USERS_API_ROUTE}/login/`, {
        username,
        password,
    });
};