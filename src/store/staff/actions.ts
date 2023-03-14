import {RestaurantInterface} from "../../api/interface";

export const ACTION_CREATE_STAFF_REQUESTED = 'ACTION_CREATE_STAFF_REQUESTED';

export interface CreateStaffRequestedPayload {
  restaurant: number; // id
}

export const createStaffRequestedAction = (payload: CreateStaffRequestedPayload) => ({
  type: ACTION_CREATE_STAFF_REQUESTED,
  payload,
});

export const ACTION_SET_STAFF = 'ACTION_SET_STAFF';

export const setStaffAction = (payload: RestaurantInterface) => ({
  type: ACTION_SET_STAFF,
  payload,
})