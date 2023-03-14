import {all, } from 'redux-saga/effects'
import usersSaga from "./users/saga";
import restaurantsSaga from "./restaurants/saga";

function* rootSaga() {
    yield all([
        usersSaga(),
        restaurantsSaga(),
    ])
}

export default rootSaga;