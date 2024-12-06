import {Platform, Dimensions} from "react-native";

export function roundWithPrecision(value: number, precision = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const isIOS = Platform.OS === "ios";

export const {width: windowWidth, height: windowHeight} =
  Dimensions.get("window");

export const isDev = __DEV__;
