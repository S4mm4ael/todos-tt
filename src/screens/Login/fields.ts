export const inputFields = [
  {
    name: "email",
    placeholder: "Enter your email",
    label: "Email",
    autoCapitalize: "none" as const,
    keyboardType: "email-address" as const,
    rules: {required: "Email is required"},
  },
  {
    name: "password",
    placeholder: "Enter your password",
    label: "Password",
    autoCapitalize: "none" as const,
    keyboardType: "default" as const,
    isPasswordField: true,
    rules: {required: "Password is required"},
  },
];
