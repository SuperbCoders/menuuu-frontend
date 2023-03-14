import {
  ACTION_SET_STAFF,
} from './actions';
import {RestaurantStaffInterface} from "../../api/interface";

interface StateInterface {
  staff: RestaurantStaffInterface;
}

const defaultState: StateInterface = {
  staff: null,
};

const staffReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_STAFF: {
      return setStaff(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setStaff(state, payload: RestaurantStaffInterface) {
  return {
    ...state,
    staff: payload,
  }
}

export default staffReducer;
