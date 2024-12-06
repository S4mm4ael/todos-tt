import React, {ForwardedRef} from "react";
import {View, ViewProps} from "react-native";
import {styles} from "./styles";

export enum BOX_TYPE {
  LARGE = "large",
  USUAL = "usual",
  NARROW = "narrow",
  SMALL = "small",
}

export interface BoxProps extends ViewProps {
  type?: BOX_TYPE;
}

export const Box = React.forwardRef(
  ({type = BOX_TYPE.USUAL, ...props}: BoxProps, ref: ForwardedRef<View>) => (
    <View
      ref={ref}
      {...props}
      style={[styles.container, styles[type], props.style]}
    >
      {props.children}
    </View>
  )
);
