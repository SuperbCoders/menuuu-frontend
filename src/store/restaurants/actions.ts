import {RestaurantInterface} from "../../api/interface";

export const ACTION_CREATE_RESTAURANT_REQUESTED = 'ACTION_CREATE_RESTAURANT_REQUESTED';

export const createRestaurantRequestedAction = (payload: RestaurantInterface) => ({
  type: ACTION_CREATE_RESTAURANT_REQUESTED,
  payload,
});

export const ACTION_SET_RESTAURANT = 'ACTION_SET_RESTAURANT';

export const setRestaurantAction = (payload: RestaurantInterface) => ({
  type: ACTION_SET_RESTAURANT,
  payload,
})