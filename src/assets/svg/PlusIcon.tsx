import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";
import {normalize} from "../../helpers";

export const PlusIcon = ({
  color = COLORS.PRIMARY,
  height = 30,
  width = 30,
}: {
  color?: string;
  height?: number;
  width?: number;
  props?: SvgProps;
}) => (
  <Svg
    width={normalize(width)}
    height={normalize(height)}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75V11.25ZM16 12.75C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25V12.75ZM11.25 8V16H12.75V8H11.25ZM8 12.75H16V11.25H8V12.75ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z"
      fill={color}
    />
  </Svg>
);
