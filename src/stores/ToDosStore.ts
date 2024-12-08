import {
  makeAutoObservable,
  action,
  runInAction,
  configure,
  computed,
} from "mobx";
import {axios} from "../services/axiosConfig";
import {editToDoBody, ToDo, CreateToDoResponse} from "../types/todo";
import {AxiosResponse} from "axios";
import {API} from "./constants";

configure({
  enforceActions: "never",
});

class ToDosStore {
  todos: ToDo[] = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this, {
      getTodos: action,
      fetchTodos: action,
      editToDo: action,
      deleteToDo: action,
      clearErrors: action,
      todosStored: computed,
      todosCount: computed,
    });
  }

  get todosCount() {
    return this.todos.length;
  }

  get todosStored() {
    return this.todos;
  }

  async getTodos() {
    this.loading = true;
    this.error = null;
    try {
      const response: AxiosResponse<ToDo[]> = await axios.get(API.TODOS);
      runInAction(() => {
        this.todos = response.data;
      });
    } catch (error) {
      runInAction(() => {
        this.error = (error as any).response?.data || "Error fetching todos";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async fetchTodos(description: string) {
    this.loading = true;
    this.error = null;
    try {
      const response: AxiosResponse<CreateToDoResponse> = await axios.post(
        API.TODOS,
        {description}
      );
      runInAction(() => {
        this.todos.push(response.data);
      });
    } catch (error) {
      runInAction(() => {
        this.error = (error as any).response?.data || "Error creating todo";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async editToDo({id, description, done}: editToDoBody) {
    this.loading = true;
    this.error = null;
    try {
      await axios.put(`${API.TODOS}${id}`, {description, done});
      runInAction(() => {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          this.todos[index] = {id, description, done};
        }
      });
    } catch (error) {
      runInAction(() => {
        this.error = (error as any).response?.data || "Error editing todo";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async deleteToDo(id: number) {
    this.loading = true;
    this.error = null;
    console.log("id", id);
    try {
      await axios.delete(`${API.TODOS}${id}`);
      runInAction(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      });
    } catch (error) {
      runInAction(() => {
        this.error = (error as any).response?.data || "Error deleting todo";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  clearErrors() {
    this.error = null;
  }
}

const toDoStore = new ToDosStore();
export default toDoStore;
