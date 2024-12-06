// src/stores/AuthStore.ts
import {makeAutoObservable, action, runInAction, configure} from "mobx";
import {axios} from "../services/axiosConfig";
import {API} from "./constants";

configure({
  enforceActions: "never",
});

export type EmailSignIn = {
  email: string;
  password: string;
};
export type EmailRegister = {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
};

class AuthStore {
  user = null;
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this, {
      register: action,
      login: action,
      logout: action,
    });
  }

  get isLoggedIn() {
    return this.user !== null;
  }

  get getError() {
    return this.error;
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
    this.error = null;

    try {
      const response = await axios.post(API.REGISTER, body);
      runInAction(() => {
        this.user = response.data;
        this.loading = false;
      });
    } catch (error) {
      this.error = error.response?.data?.details || "Registration failed";
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
}

const authStore = new AuthStore();
export default authStore;
