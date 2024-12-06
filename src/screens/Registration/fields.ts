import {styles} from "./styles";
import authStore from "../../stores/AuthStore";
import {KeyboardTypeOptions} from "react-native";

export const inputFields = [
  {
    name: "first_name",
    placeholder: "Enter your first name",
    label: "First name",
    variant: "solid" as const,
    containerStyle: styles.input,
    errorMessage: authStore.getErrorRegister?.first_name?.[0] || "",
    autoCapitalize: "words" as const,
    keyboardType: "default" as KeyboardTypeOptions,
    textContentType: "givenName" as const,
  },
  {
    name: "last_name",
    placeholder: "Enter your last name",
    label: "Last name",
    variant: "solid" as const,
    containerStyle: styles.input,
    errorMessage: authStore.getErrorRegister?.last_name?.[0] || "",
    autoCapitalize: "words" as const,
    keyboardType: "default" as KeyboardTypeOptions,
    textContentType: "familyName" as const,
  },
  {
    name: "email",
    placeholder: "Enter your email",
    label: "Email",
    variant: "solid" as const,
    containerStyle: styles.input,
    autoCapitalize: "none" as const,
    keyboardType: "email-address" as KeyboardTypeOptions,
    errorMessage: authStore.getErrorRegister?.email?.[0] || "",
    textContentType: "emailAddress" as const,
  },
  {
    name: "password",
    placeholder: "Enter your password",
    label: "Password",
    variant: "solid" as const,
    containerStyle: styles.input,
    isPasswordField: true,
    textContentType: "newPassword" as const,
    errorMessage: authStore.getErrorRegister?.password?.[0] || "",
  },
  {
    name: "password2",
    placeholder: "Repeat your password",
    label: "Repeat password",
    variant: "solid" as const,
    containerStyle: styles.input,
    isPasswordField: true,
    textContentType: "newPassword" as const,
    errorMessage: authStore.getErrorRegister?.password2?.[0] || "",
  },
];
