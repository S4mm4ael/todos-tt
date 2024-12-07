// src/stores/AuthStore.ts
import {
  makeAutoObservable,
  action,
  runInAction,
  configure,
  computed,
} from "mobx";
import {axios} from "../services/axiosConfig";
import {API} from "./constants";
import {EmailRegister, EmailSignIn, ErrorRegisterObject} from "./types";

configure({
  enforceActions: "never",
});

class AuthStore {
  user = null;
  loading = false;
  error = null;
  errorObject = null;

  constructor() {
    makeAutoObservable(this, {
      register: action,
      login: action,
      logout: action,
      getErrorRegister: computed,
    });
  }

  get isLoggedIn() {
    return this.user !== null;
  }

  get getErrorLogin() {
    return this.error;
  }

  get getErrorRegister(): ErrorRegisterObject | null {
    return this.errorObject;
  }

  async register({
    email,
    password,
    password2,
    first_name,
    last_name,
  }: EmailRegister) {
    const body = {
      email,
      password,
      password2,
      first_name,
      last_name,
    };

    this.loading = true;
    this.errorObject = null;

    try {
      const response = await axios.post(API.REGISTER, body);
      console.log("response", response);
      runInAction(() => {
        this.user = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.log("error", error.response);
      this.errorObject = error.response?.data || "Registration failed";
      runInAction(() => {
        this.loading = false;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async login({email, password}: EmailSignIn) {
    const body = {
      email,
      password,
    };

    this.loading = true;
    this.error = null;

    try {
      const response = await axios.post(API.LOGIN, body);
      runInAction(() => {
        this.user = response.data;
        this.loading = false;
      });
    } catch (error) {
      this.error = error.response?.data.detail || "Login failed";
      runInAction(() => {
        this.loading = false;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  logout() {
    this.user = null;
  }

  clearErrors() {
    this.error = null;
    this.errorObject = null;
  }
}

const authStore = new AuthStore();
export default authStore;
