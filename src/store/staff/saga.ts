import {call, takeLatest} from 'redux-saga/effects';
import {
    ACTION_CREATE_STAFF_REQUESTED, CreateStaffRequestedPayload,
} from "./actions";
import {DefaultAction} from "../interface";
import {ArrayResponse, RESTAURANT_STAFF_POSITION, RestaurantStaffInterface} from "../../api/interface";
import {CREATE_STAFF} from "../../api/Staff";
import {getLocalStorageItem} from "../../utils/localStorage";
import {LOCAL_STORAGE_KEYS} from "../../constants/localStorage";

export function* createStaff(action: DefaultAction<CreateStaffRequestedPayload>) {
    try {
        const user = parseInt(getLocalStorageItem(LOCAL_STORAGE_KEYS.USER));
        const restaurant = action.payload.restaurant;
        const responseData: RestaurantStaffInterface
            = (yield call(CREATE_STAFF, {
            user,
            restaurant,
            position: RESTAURANT_STAFF_POSITION.OWNER,
        })).data;
    } catch (error) {
        const detail = error.response?.data?.detail;
        if (detail) {
            console.log(detail);
        } else {
            console.log(error);
        }
    }
}


function* staffSaga() {
    yield takeLatest(ACTION_CREATE_STAFF_REQUESTED, createStaff);
}

export default staffSaga;