type ToDo = {
  id: number;
  description: string;
  done: boolean;
};

type CreateToDoResponse = {
  id: number;
  description: string;
  done: boolean;
};

type editToDoBody = {
  id: number;
  description: string;
  done: boolean;
};

export type {editToDoBody, ToDo, CreateToDoResponse};
