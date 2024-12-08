import {MMKV} from "react-native-mmkv";
import {ResponseSignUp} from "../types/auth";
import authStore from "../stores/AuthStore";
import {MMKV_KEYS} from "../constants/storageKeys";

const MMKVstorage = new MMKV();

const ONE_HOUR = 60 * 60 * 1000;
const ONE_DAY = 24 * 60 * 60 * 1000;

export const setAccessToken = async (accessToken: string) => {
  MMKVstorage.set(MMKV_KEYS.ACCESS_TOKEN, accessToken);
  MMKVstorage.set(MMKV_KEYS.ACCESS_TOKEN_TIMESTAMP, Date.now().toString());
};

export const setRefreshToken = (refreshToken: string) => {
  MMKVstorage.set(MMKV_KEYS.REFRESH_TOKEN, refreshToken);
  MMKVstorage.set(MMKV_KEYS.REFRESH_TOKEN_TIMESTAMP, Date.now().toString());
};

export const getAccessToken = (): string | null => {
  const token = MMKVstorage.getString(MMKV_KEYS.ACCESS_TOKEN);
  const timestamp = MMKVstorage.getString(MMKV_KEYS.ACCESS_TOKEN_TIMESTAMP);
  if (token && timestamp) {
    const tokenAge = Date.now() - parseInt(timestamp, 10);
    if (tokenAge < ONE_HOUR) {
      return token;
    }
  }
  return null;
};

export const getRefreshToken = (): string | null => {
  const token = MMKVstorage.getString(MMKV_KEYS.REFRESH_TOKEN);
  const timestamp = MMKVstorage.getString(MMKV_KEYS.REFRESH_TOKEN_TIMESTAMP);
  if (token && timestamp) {
    const tokenAge = Date.now() - parseInt(timestamp, 10);
    if (tokenAge < ONE_DAY) {
      return token;
    }
  }
  return null;
};

const saveLocalUser = (email: string, userData: ResponseSignUp) => {
  MMKVstorage.set(email, JSON.stringify(userData));
};

const getLocalUser = (email: string): ResponseSignUp | null => {
  const user = MMKVstorage.getString(email);
  if (user) {
    authStore.setUser(JSON.parse(user));
  }
  return null;
};

export {MMKVstorage, saveLocalUser, getLocalUser};
