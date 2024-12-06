// src/stores/AuthStore.ts
import {makeAutoObservable} from "mobx";
import {axios} from "../services/axiosConfig";
import {API} from "./constants";

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
    makeAutoObservable(this);
  }

  async register({
    email,
    password,
    password2,
    first_name,
    last_name,
  }: EmailRegister) {
    this.loading = true;
    this.error = null;
    console.log("Register in with:", {
      email,
      password,
      password2,
      first_name,
      last_name,
    });
    try {
      const response = await axios.post(API.REGISTER, {
        email,
        password,
        password2,
        first_name,
        last_name,
      });
      this.user = response.data;
    } catch (error) {
      this.error = error.response?.data?.message || "Registration failed";
    } finally {
      this.loading = false;
    }
  }

  async login({email, password}: EmailSignIn) {
    this.loading = true;
    this.error = null;
    console.log("Logging in with:", {
      email,
      password,
    });
    try {
      const response = await axios.post(API.LOGIN, {email, password});
      this.user = response.data;
    } catch (error) {
      this.error = error.response?.data?.message || "Login failed";
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  logout() {
    this.user = null;
  }

  get isLoggedIn() {
    return this.user !== null;
  }
}

const authStore = new AuthStore();
export default authStore;
