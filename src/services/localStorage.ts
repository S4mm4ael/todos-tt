import {MMKV} from "react-native-mmkv";
import {ResponseSignUp} from "../types/auth";
import authStore from "../stores/AuthStore";

const MMKVstorage = new MMKV();

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
