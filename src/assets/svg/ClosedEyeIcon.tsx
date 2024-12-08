import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";

export const ClosedEyeIcon = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 21 21" fill="none" {...props}>
    <Path
      fill={COLORS.BLACK}
      fillRule="evenodd"
      d="M1.792.308A1.05 1.05 0 1 0 .308 1.792l18.9 18.9a1.05 1.05 0 0 0 1.484-1.485L16.5 15.015a10.569 10.569 0 0 0 1.475-1.176l2.7-2.58a1.05 1.05 0 0 0 0-1.518l-2.7-2.58c-3.119-2.98-7.69-3.71-11.522-2.193L1.793.308ZM7.605 6.12l7.275 7.275A5.25 5.25 0 0 0 7.605 6.12Z"
      clipRule="evenodd"
    />
    <Path
      fill={COLORS.BLACK}
      d="M3.025 7.162c.094-.09.19-.179.287-.265l2.144 2.144a5.25 5.25 0 0 0 6.504 6.504l.983.983c-3.448.78-7.225-.116-9.918-2.69l-2.7-2.579a1.05 1.05 0 0 1 0-1.518l2.7-2.58Z"
    />
  </Svg>
);
