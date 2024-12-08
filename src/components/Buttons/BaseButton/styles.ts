import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants/colors";
import {normalize} from "../../../helpers";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderWidth: normalize(1),
    height: normalize(20),
    paddingHorizontal: normalize(2),
    borderRadius: normalize(10),
  },
  primary: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  secondary: {
    backgroundColor: COLORS.BLACK,
    borderColor: COLORS.BLACK,
  },
  disabled: {
    backgroundColor: COLORS.LIGHT,
    borderColor: COLORS.LIGHT,
  },
  link: {
    height: "auto",
    justifyContent: "flex-start",
    alignSelf: "baseline",
  },
  text: {
    fontSize: normalize(10),
    color: COLORS.WHITE,
  },
  textLink: {
    color: COLORS.PRIMARY,
    fontSize: normalize(14),
  },
  icon: {
    marginRight: normalize(8),
  },
  endIcon: {
    marginLeft: normalize(16),
    paddingBottom: normalize(5),
  },
});

export default styles;
