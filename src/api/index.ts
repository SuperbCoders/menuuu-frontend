import axios from "axios";
import {API_URL} from "./constants";
import {getLocalStorageItem} from "../utils/localStorage";
import {LOCAL_STORAGE_KEYS} from "../constants/localStorage";

const UnauthorizedApi = axios.create({
    baseURL: API_URL,
});

const Api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Basic ${getLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
    },
});

export {
    Api,
    UnauthorizedApi,
};