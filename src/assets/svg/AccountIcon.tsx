import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";
import {COLORS} from "../../constants/colors";

interface Props extends SvgProps {
  color?: COLORS | string;
}

export const AccountIcon = ({color = COLORS.BLACK, ...rest}: Props) => (
  <Svg width={17} height={21} viewBox="0 0 17 21" fill="none" {...rest}>
    <Path
      d="M512 616.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
      fill={color}
    />
    <Path
      d="M511.6 656.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
      fill={color}
    />
    <Path
      d="M512.4 697.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
      fill={color}
    />
    <Path
      d="M512 130.8c42.1 0 81.7 16.4 111.5 46.2s46.2 69.4 46.2 111.5-16.4 81.7-46.2 111.5c-29.8 29.8-69.4 46.2-111.5 46.2s-81.7-16.4-111.5-46.2c-29.8-29.8-46.2-69.4-46.2-111.5s16.4-81.7 46.2-111.5 69.4-46.2 111.5-46.2m0-44c-111.4 0-201.6 90.3-201.6 201.6C310.4 399.8 400.7 490 512 490c111.4 0 201.6-90.3 201.6-201.6S623.3 86.8 512 86.8zM512.3 523.5L84 681.4v255.7h856V681.4L512.3 523.5zM896 893.1H128V712.6l384.3-142.4L896 712.6v180.5z"
      fill={COLORS.DARK}
    />
    <Path
      d="M555.4 585.3l-1.4-0.5v159.9c0 11.7-4.8 22.3-12.4 30-7.7 7.7-18.3 12.4-30 12.4-23.4 0-42.4-19-42.4-42.4V585.3l-1.4 0.5-14.6 5.2v153.8c0 32.2 26.2 58.4 58.4 58.4S570 777 570 744.8V590.5l-14.6-5.2z"
      fill={COLORS.SECONDARY}
    />
  </Svg>
);
