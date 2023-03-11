import {EmptyObjectType} from "../../interfaces/default";

export const ACTION_LOGIN = 'ACTION_LOGIN';

export interface LoginPayload {
  token: string;
}

export const loginAction = (data: LoginPayload) => ({
  type: ACTION_LOGIN,
  payload: data,
});

export const ACTION_LOGOUT: string = 'ACTION_LOGOUT';

export const logoutAction = () => ({
  type: ACTION_LOGOUT,
});

export const ACTION_LOGIN_REQUESTED = 'ACTION_LOGIN_REQUESTED';

export interface LoginRequestedPayload {
  username: string;
  password: string;
}

export const LoginRequestedAction = (data: EmptyObjectType<LoginRequestedPayload>) => ({
  type: ACTION_LOGIN_REQUESTED,
  payload: data,
});