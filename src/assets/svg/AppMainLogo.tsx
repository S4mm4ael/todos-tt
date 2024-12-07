import * as React from "react";
import Svg, {Path, Rect, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";

export const AppMainLogo = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" width="100" height="100" {...props}>
    <Rect
      x="0"
      y="0"
      width="100"
      height="100"
      rx="15"
      ry="15"
      fill={COLORS.LIGHT_YELLOW}
    />
    <Path d="M100,100 L75,100 Q90,85 100,75 Z" fill={COLORS.YELLOW} />
    <Path
      d="M35 50 L45 60 L70 35"
      stroke={COLORS.WARNING}
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
