import {MMKV} from "react-native-mmkv";
import {ResponseSignUp} from "../types/auth";
import authStore from "../stores/AuthStore";
import {MMKV_KEYS} from "../constants/storageKeys";
import {set} from "mobx";

const MMKVstorage = new MMKV();

export const setAccessToken = async (accessToken: string) => {
  MMKVstorage.set(MMKV_KEYS.ACCESS_TOKEN, accessToken);
};

export const setRefreshToken = (refreshToken: string) => {
  MMKVstorage.set(MMKV_KEYS.REFRESH_TOKEN, refreshToken);
};

export const getAccessToken = (): string | null =>
  MMKVstorage.getString(MMKV_KEYS.ACCESS_TOKEN) ?? null;

export const getRefreshToken = (): string | null =>
  MMKVstorage.getString(MMKV_KEYS.REFRESH_TOKEN) ?? null;

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
