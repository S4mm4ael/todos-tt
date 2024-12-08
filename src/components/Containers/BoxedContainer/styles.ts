import {StyleSheet} from "react-native";
import {normalize} from "../../../helpers";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  small: {
    marginHorizontal: normalize(6),
  },
  large: {
    marginHorizontal: normalize(10),
  },
  usual: {
    marginHorizontal: normalize(12),
  },
  narrow: {
    marginHorizontal: normalize(30),
  },
});

export {styles};
