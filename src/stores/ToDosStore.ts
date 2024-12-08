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
  activeToDoId: number | null = null;
  loading = false;
  error: {description: string[]} | null = null;

  constructor() {
    makeAutoObservable(this, {
      getTodos: action,
      fetchTodos: action,
      editToDo: action,
      deleteToDo: action,
      clearErrors: action,
      todosStored: computed,
      todosCount: computed,
      getError: computed,
    });
  }

  get todosCount() {
    return this.todos.length;
  }

  get todosStored() {
    return this.todos;
  }

  get getError() {
    if (this.error) {
      return this.error.description[0];
    }
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

  setActiveToDoId(id: number) {
    this.activeToDoId = id;
  }

  clearErrors() {
    this.error = null;
  }
}

const toDoStore = new ToDosStore();
export default toDoStore;
