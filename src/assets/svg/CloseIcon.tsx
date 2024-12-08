import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";
interface Props extends SvgProps {
  color?: COLORS | string;
}
export const CloseIcon = ({color = COLORS.BLACK, ...rest}: Props) => (
  <Svg width={20} height={20} viewBox="0 0 16 16" fill="none" {...rest}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M7.912 5.196 2.897.18a.615.615 0 0 0-.87 0L.346 1.86c-.24.24-.24.63 0 .87l5.016 5.015-5.016 5.016c-.24.24-.24.63 0 .87l1.68 1.679c.24.24.63.24.87 0l5.015-5.016 5.016 5.016c.24.24.63.24.87 0l1.679-1.68c.24-.24.24-.63 0-.87L10.46 7.746l5.016-5.015c.24-.24.24-.63 0-.87L13.797.18a.615.615 0 0 0-.87 0L7.913 5.196Z"
      clipRule="evenodd"
    />
  </Svg>
);
