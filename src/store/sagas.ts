import {all, } from 'redux-saga/effects'
import usersSaga from "./users/saga";

function* rootSaga() {
    yield all([
        usersSaga(),
    ])
}

export default rootSaga;