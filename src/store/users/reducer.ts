import {
  ACTION_LOGIN,
  ACTION_LOGOUT, LoginPayload,
} from './actions';
import {removeLocalStorageItem, setLocalStorageItem} from "../../utils/localStorage";
import {LOCAL_STORAGE_KEYS} from "../../constants/localStorage";
import {ROUTE_ROOT} from "../../constants/routes";

interface StateInterface {
  token: string;
}

const defaultState: StateInterface = {
  token: '',
};

const usersReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_LOGIN: {
      return login(state, action.payload);
    }
    case ACTION_LOGOUT: {
      return logout(state);
    }
    default: {
      return state;
    }
  }
};

function login(state, payload: LoginPayload) {
  setLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN, payload.token);
  window.location.replace(ROUTE_ROOT);

  return {
    ...state,
    token: payload.token,
  }
}

function logout(state) {
  removeLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);

  return {
    ...state,
    token: defaultState.token,
  }
}

export default usersReducer;
