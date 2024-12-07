import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";

export const PlusIcon = ({
  color = "#fff",
  height = 31,
  width = 31,
  ...props
}: {
  color?: string;
  height?: number;
  width?: number;
  props?: SvgProps;
}) => (
  <Svg width={width} height={height} viewBox="0 0 31 31" fill="none" {...props}>
    <Path stroke={color} strokeWidth={2} d="M0.13208 16.2809L31.0008 16.2809" />
    <Path d="M15.584 31V.13" stroke={color} strokeWidth={2} />
  </Svg>
);
