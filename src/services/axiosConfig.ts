import Config from "react-native-config";
import {MMKV} from "react-native-mmkv";
import Axios from "axios";
import {MMKV_KEYS} from "../constants/storageKeys";
//import {useUserStore} from "../../store/useUserStore";

export const MMKVstorage = new MMKV();
export const BASE_URL = Config.API_BASE_URL;

export interface GenericResponse {
  success: boolean;
}

export interface GenericSuccessResponse<T = null> extends GenericResponse {
  data: T;
}

export interface GenericFailedResponse<T = null> extends GenericResponse {
  error: T;
}

const axios = Axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    Connection: "close",
    "Keep-Alive": "timeout=30, max=100",
  },
});

axios.interceptors.request.use(
  async (config) => {
    const token = MMKVstorage.getString(MMKV_KEYS.ACCESS_TOKEN);
    if (config.headers) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    console.warn("Error", error);
    throw error;
  }
);

export type TokenRefresh = {
  refresh: string;
  access?: string;
};

export const refreshTokenRequest = async (refresh: TokenRefresh) => {
  try {
    const res = await axios.post<TokenRefresh>("/token/refresh", {
      refresh,
    });
    return res.data.access;
  } catch (e) {
    console.log(e);
  }
};

export const setAccessToken = async (accessToken: string) => {
  MMKVstorage.set(MMKV_KEYS.ACCESS_TOKEN, accessToken);
};

async function refreshToken() {
  const refresh = getRefreshToken();
  if (refresh) {
    const accessToken = await refreshTokenRequest({refresh});
    if (accessToken) {
      await setAccessToken(accessToken);
    }
    return accessToken;
  }
}

export const getRefreshToken = (): string | null =>
  MMKVstorage.getString(MMKV_KEYS.REFRESH_TOKEN) ?? null;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      useUserStore.getState().clearUser();
      MMKVstorage.set(MMKV_KEYS.ACCESS_TOKEN, "");
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers.Authorization = `${newAccessToken}`;
      } catch (e) {
        console.warn("Error update token", e);
        MMKVstorage.set(MMKV_KEYS.ACCESS_TOKEN, "");
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export {axios};
