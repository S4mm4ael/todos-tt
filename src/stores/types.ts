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

export type ErrorRegisterObject = {
  first_name?: string[];
  last_name?: string[];
  email?: string[];
  password?: string[];
  password2?: string[];
};
