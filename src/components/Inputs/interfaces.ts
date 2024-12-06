import {TextInputProps, StyleProp, TextStyle, ViewStyle} from "react-native";

export interface InputProps extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: React.ElementType;
  errorMessage?: string;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  letterCounter?: number;
  isPasswordField?: boolean;
  variant?: "solid" | "outline";
  iconClickHandler?: () => void;
  endIconClickHandler?: () => void;
  endIcon?: React.ElementType;
  bottomInfo?: string;
  disabledEndIcon?: boolean;
}
