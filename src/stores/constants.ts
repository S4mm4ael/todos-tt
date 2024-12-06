import Config from "react-native-config";

export const API_BASE_URL = Config.API_URL;

export enum API {
  REGISTER = `/register`,
  LOGIN = "/login",
  LOGOUT = "/logout",
}
