import {Platform, Dimensions} from "react-native";

export const isDev = __DEV__;
export const isIOS = Platform.OS === "ios";

export const {width: windowWidth, height: windowHeight} =
  Dimensions.get("window");

const realWidth = windowHeight > windowWidth ? windowHeight : windowHeight;

export const normalize = (size: number): number => {
  const compareScreenWidth = 375;
  return Math.round((size * realWidth) / compareScreenWidth);
};
