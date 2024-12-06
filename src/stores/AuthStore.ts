// src/stores/AuthStore.ts
import {makeAutoObservable} from "mobx";
import {axios} from "../services/axiosConfig";
import {API} from "./constants";

class AuthStore {
  user = null;
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async register(username: string, password: string) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.post(API.REGISTER, {username, password});
      this.user = response.data;
    } catch (error) {
      this.error = error.response?.data?.message || "Registration failed";
    } finally {
      this.loading = false;
    }
  }

  async login(username: string, password: string) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.post(API.LOGIN, {username, password});
      this.user = response.data;
    } catch (error) {
      this.error = error.response?.data?.message || "Login failed";
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
