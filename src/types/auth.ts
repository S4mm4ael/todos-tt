type signUpData = {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
};

type signUpError = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
};

type EmailSignIn = {
  email: string;
  password: string;
};

type EmailSignUp = {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
};

type ResponseSignUp = {
  email: string;
  first_name: string;
  last_name: string;
};

type ResponseSignIn = {
  access: string;
  refresh: string;
};

export type {
  EmailSignIn,
  EmailSignUp,
  signUpError,
  ResponseSignIn,
  ResponseSignUp,
  signUpData,
};
