import {call, put, takeLatest} from 'redux-saga/effects';
import {
    ACTION_CREATE_RESTAURANT_REQUESTED,
} from "./actions";
import {DefaultAction} from "../interface";
import {RestaurantInterface} from "../../api/interface";
import {CREATE_RESTAURANT} from "../../api/Restaurants";
import {createStaffRequestedAction} from "../staff/actions";

export function* createRestaurant(action: DefaultAction<RestaurantInterface>) {
    try {
        const responseData: RestaurantInterface
            = (yield call(CREATE_RESTAURANT, action.payload)).data;
        yield put(createStaffRequestedAction({
            restaurant: responseData.id,
        }))
    } catch (error) {
        const detail = error.response?.data?.detail;
        if (detail) {
            console.log(detail);
        } else {
            console.log(error);
        }
    }
}


function* restaurantsSaga() {
    yield takeLatest(ACTION_CREATE_RESTAURANT_REQUESTED, createRestaurant);
}

export default restaurantsSaga;