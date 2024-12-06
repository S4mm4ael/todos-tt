import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";

interface Props extends SvgProps {
  color?: COLORS | string;
  size?: number;
}

export const ExclamationPointIcon = ({
  color = COLORS.DANGER,
  size = 14,
  ...rest
}: Props) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...rest}>
    <Path
      fill={color}
      d="M7 13.417A6.398 6.398 0 0 1 .583 7 6.398 6.398 0 0 1 7 .583 6.398 6.398 0 0 1 13.417 7 6.398 6.398 0 0 1 7 13.417Zm.875-10.5h-1.75v4.666h1.75V2.917ZM7 8.75a1.17 1.17 0 0 0-1.167 1.167A1.17 1.17 0 0 0 7 11.083a1.17 1.17 0 0 0 1.167-1.166A1.17 1.17 0 0 0 7 8.75Z"
    />
  </Svg>
);
