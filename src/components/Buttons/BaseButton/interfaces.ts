import {
  StyleProp,
  ViewStyle,
  TextStyle,
  ButtonProps,
  GestureResponderEvent,
} from "react-native";

export enum BUTTON_TYPE {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LINK = "link",
  DISABLED = "disabled",
}

export interface BaseButtonProps extends ButtonProps {
  title: string;
  onPress?: (e: GestureResponderEvent) => void;
  type?: BUTTON_TYPE;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ElementType;
  endIcon?: React.ElementType;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
}
