import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";
import {normalize} from "../../helpers";

interface Props extends SvgProps {
  color?: string;
}

export const HomeIcon = ({color = COLORS.BLACK, ...rest}: Props) => (
  <Svg width={normalize(15)} height={normalize(15)} viewBox="0 0 16 16">
    <Path
      d="m 8 1 c -0.207031 0 -0.410156 0.066406 -0.582031 0.183594 l -7 5 c -0.449219 0.324218 -0.554688 0.945312 -0.234375 1.394531 c 0.191406 0.265625 0.492187 0.421875 0.816406 0.417969 v 4.003906 c 0 1.644531 1.355469 3 3 3 h 8 c 1.644531 0 3 -1.320312 3 -3 v -4.003906 c 0.324219 0.003906 0.625 -0.152344 0.816406 -0.417969 c 0.320313 -0.449219 0.214844 -1.070313 -0.234375 -1.394531 l -7 -5 c -0.171875 -0.117188 -0.375 -0.183594 -0.582031 -0.183594 z m 0 2.226562 l 5 3.570313 v 5.203125 c 0 0.5625 -0.4375 1 -1 1 h -3 v -4 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 c -0.554688 0 -1 0.445312 -1 1 v 4 h -2 c -0.5625 0 -1 -0.4375 -1 -1 v -5.203125 z m 0 0"
      fill={color}
    />
  </Svg>
);
