import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";
interface Props extends SvgProps {
  color?: COLORS | string;
}
export const PencilIcon = ({color = COLORS.BLACK, ...rest}: Props) => (
  <Svg width={20} height={20} viewBox="0 0 19 19" fill="none" {...rest}>
    <Path
      d="M12.414.342a1.167 1.167 0 011.65 0l4.261 4.26a1.167 1.167 0 010 1.65L6.963 17.616c-.179.178-.41.294-.66.33l-4.971.71a1.166 1.166 0 01-1.32-1.32l.71-4.97c.036-.25.151-.482.33-.66L12.414.341z"
      fill={color}
    />
  </Svg>
);
