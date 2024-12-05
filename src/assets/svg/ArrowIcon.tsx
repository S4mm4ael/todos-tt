import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";

interface Props extends SvgProps {
  color?: string;
}

export const ArrowIcon = ({color = COLORS.BLACK, ...rest}: Props) => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path fill={color} d="m7.1 12 4.6-6h3.8l-4.6 6 4.6 6h-3.8l-4.6-6Z" />
  </Svg>
);
