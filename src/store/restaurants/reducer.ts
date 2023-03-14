import {
  ACTION_SET_RESTAURANT,
} from './actions';
import {RestaurantInterface} from "../../api/interface";

interface StateInterface {
  restaurant: RestaurantInterface;
}

const defaultState: StateInterface = {
  restaurant: null,
};

const restaurantsReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_RESTAURANT: {
      return setRestaurant(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setRestaurant(state, payload: RestaurantInterface) {
  return {
    ...state,
    restaurant: payload,
  }
}

export default restaurantsReducer;
