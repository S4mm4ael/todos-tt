import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";

export const OpenedEyeIcon = (props: SvgProps) => (
  <Svg width={21} height={13} viewBox="0 0 21 13" fill="none" {...props}>
    <Path
      fill={props.color ?? COLORS.BLACK}
      fillRule="evenodd"
      d="M18.272 3.935C13.978-.312 7.02-.312 2.727 3.935L.65 5.99a.719.719 0 0 0 0 1.022l2.077 2.054c4.293 4.247 11.252 4.247 15.545 0L20.35 7.01a.719.719 0 0 0 0-1.022l-2.077-2.054ZM13.92 2.811a9.538 9.538 0 0 1 3.342 2.146l1.56 1.543-1.56 1.543a9.538 9.538 0 0 1-3.342 2.146A5.018 5.018 0 0 0 15.53 6.5c0-1.458-.62-2.77-1.61-3.69Zm-6.841 0a9.538 9.538 0 0 0-3.342 2.146L2.177 6.5l1.56 1.543a9.538 9.538 0 0 0 3.342 2.146A5.018 5.018 0 0 1 5.469 6.5c0-1.458.62-2.77 1.61-3.69ZM6.906 6.5a3.594 3.594 0 1 1 7.187 0 3.594 3.594 0 0 1-7.187 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
