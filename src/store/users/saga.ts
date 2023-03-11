import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGIN, LoginResponseData} from "../../api/Users";
import {loginAction, ACTION_LOGIN_REQUESTED, LoginRequestedPayload} from "./actions";
import {DefaultAction} from "../interface";

export function* login(action: DefaultAction<LoginRequestedPayload>) {
    const username: string = action.payload.username;
    const password: string = action.payload.password;
    try {
        const responseData: LoginResponseData = (yield call(LOGIN, username, password)).data;
        yield put(loginAction(responseData));
    } catch (error) {
        const forbiddenError = error.response?.status === 403;
        if (forbiddenError) {
            console.log(error.response.data.detail);
        } else {
            console.log(error);
        }
    }
}


function* authSaga() {
    yield takeLatest(ACTION_LOGIN_REQUESTED, login);
}

export default authSaga;