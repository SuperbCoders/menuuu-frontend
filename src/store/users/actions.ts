import {EmptyObjectType} from "../../interfaces/default";
import {RestaurantInterface} from "../../api/interface";

export const ACTION_LOGIN = 'ACTION_LOGIN';

export interface LoginPayload {
  token: string;
  user: number;
}

export const loginAction = (payload: LoginPayload) => ({
  type: ACTION_LOGIN,
  payload,
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

export const loginRequestedAction = (payload: EmptyObjectType<LoginRequestedPayload>) => ({
  type: ACTION_LOGIN_REQUESTED,
  payload,
});

export const ACTION_GET_MY_RESTAURANTS_REQUESTED = 'ACTION_GET_MY_RESTAURANTS_REQUESTED';

export const getMyRestaurantsRequestedAction = () => ({
  type: ACTION_GET_MY_RESTAURANTS_REQUESTED,
});

export const ACTION_SET_USER_RESTAURANTS = 'ACTION_SET_USER_RESTAURANTS';

export const setUserRestaurantsAction = (payload: RestaurantInterface[]) => ({
  type: ACTION_SET_USER_RESTAURANTS,
  payload,
});