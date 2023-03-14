import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_MY_RESTAURANTS, LOGIN, LoginResponse} from "../../api/Users";
import {
    loginAction,
    ACTION_LOGIN_REQUESTED,
    LoginRequestedPayload,
    ACTION_GET_MY_RESTAURANTS_REQUESTED,
    setUserRestaurantsAction,
} from "./actions";
import {DefaultAction} from "../interface";
import {ArrayResponse, RestaurantInterface} from "../../api/interface";

export function* login(action: DefaultAction<LoginRequestedPayload>) {
    const username: string = action.payload.username;
    const password: string = action.payload.password;
    try {
        const responseData: LoginResponse = (yield call(LOGIN, username, password)).data;
        yield put(loginAction(responseData));
    } catch (error) {
        const detail = error.response?.data?.detail;
        if (detail) {
            console.log(detail);
        } else {
            console.log(error);
        }
    }
}

export function* getMyRestaurants() {
    try {
        const responseData: ArrayResponse<RestaurantInterface> = (yield call(GET_MY_RESTAURANTS)).data;
        yield put(setUserRestaurantsAction(responseData.results));
    } catch (error) {
        const detail = error.response?.data?.detail;
        if (detail) {
            console.log(detail);
        } else {
            console.log(error);
        }
    }
}


function* usersSaga() {
    yield takeLatest(ACTION_LOGIN_REQUESTED, login);
    yield takeLatest(ACTION_GET_MY_RESTAURANTS_REQUESTED, getMyRestaurants);
}

export default usersSaga;