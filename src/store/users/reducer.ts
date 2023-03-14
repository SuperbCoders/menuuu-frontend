import {
  ACTION_LOGIN,
  ACTION_LOGOUT, ACTION_SET_USER_RESTAURANTS, LoginPayload,
} from './actions';
import {removeLocalStorageItem, setLocalStorageItem} from "../../utils/localStorage";
import {LOCAL_STORAGE_KEYS} from "../../constants/localStorage";
import {ROUTE_ROOT} from "../../constants/routes";
import {RestaurantInterface} from "../../api/interface";

interface StateInterface {
  user: number;
  token: string;
  restaurants: RestaurantInterface[];
}

const defaultState: StateInterface = {
  user: null,
  token: '',
  restaurants: [],
};

const usersReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_LOGIN: {
      return login(state, action.payload);
    }
    case ACTION_LOGOUT: {
      return logout(state);
    }
    case ACTION_SET_USER_RESTAURANTS: {
      return setUserRestaurants(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function login(state, payload: LoginPayload) {
  setLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN, payload.token);
  setLocalStorageItem(LOCAL_STORAGE_KEYS.USER, payload.user.toString());
  window.location.replace(ROUTE_ROOT);

  return {
    ...state,
    token: payload.token,
    userId: payload.user,
  }
}

function logout(state) {
  removeLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
  removeLocalStorageItem(LOCAL_STORAGE_KEYS.USER);

  return {
    ...state,
    token: defaultState.token,
  }
}

function setUserRestaurants(state, payload: RestaurantInterface[]) {
  return {
    ...state,
    restaurants: payload,
  }
}

export default usersReducer;
