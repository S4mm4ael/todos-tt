import Config from "react-native-config";
import Axios from "axios";
import authStore from "../stores/AuthStore";
import {API} from "../stores/constants";
import {getRefreshToken, setAccessToken, getAccessToken} from "./localStorage";

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
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Accept = "application/json";
    }

    return config;
  },
  (error) => {
    // console.warn("Error", error);
    throw error;
  }
);

export const refreshTokenRequest = async (refresh: string) => {
  try {
    const res = await axios.post(API.CREATE_REFRESH_TOKEN, {
      refresh,
    });
    return res.data.access;
  } catch (e) {
    // console.warn("Error", error);
  }
};

async function refreshToken() {
  const refresh = getRefreshToken();
  if (refresh) {
    const accessToken = await refreshTokenRequest(refresh);
    if (accessToken) {
      await setAccessToken(accessToken);
    }
    return accessToken;
  }
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      authStore.logout();
      setAccessToken("");
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers.Authorization = `${newAccessToken}`;
      } catch (e) {
        setAccessToken("");
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export {axios};
