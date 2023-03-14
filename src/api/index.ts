import axios from "axios";
import {API_URL} from "./constants";
import {getLocalStorageItem, removeLocalStorageItem} from "../utils/localStorage";
import {LOCAL_STORAGE_KEYS} from "../constants/localStorage";
import {ROUTE_AUTH} from "../constants/routes";

const UnauthorizedApi = axios.create({
    baseURL: API_URL,
});

const Api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Token ${getLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
    },
});

const ApiResponseInterceptor = (error) => {
    if ([401,].includes(error.response.status) && window.location.pathname !== ROUTE_AUTH) {
        removeLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
        window.location.replace(ROUTE_AUTH);
    }
    return Promise.reject(error);
};

Api.interceptors.response.use(function (response) {
    return response;
}, ApiResponseInterceptor);

export {
    Api,
    UnauthorizedApi,
};