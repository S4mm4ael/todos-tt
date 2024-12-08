import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants/colors";
import {normalize} from "../../../helpers";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  label: {
    fontSize: normalize(6),
    lineHeight: normalize(6),
    marginBottom: normalize(2),
  },
  input: {
    height: normalize(20),
    backgroundColor: COLORS.WHITE,
    fontSize: normalize(6),
    paddingHorizontal: normalize(4),
    color: COLORS.BLACK,
    borderRadius: normalize(5),
  },
  inputSolid: {
    backgroundColor: COLORS.LIGHT,
    borderColor: COLORS.LIGHT,
  },
  inputLeftPadding: {
    paddingLeft: normalize(12),
  },
  inputRightPadding: {
    paddingRight: normalize(28),
  },
  inputError: {
    borderColor: COLORS.DANGER,
    borderWidth: normalize(1),
  },
  icon: {
    position: "absolute",
    left: normalize(5),
  },
  eye: {
    position: "absolute",
    right: normalize(8),
  },
  textPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomInfo: {
    fontSize: normalize(8),
    lineHeight: normalize(10),
    color: COLORS.BLACK,
    paddingTop: normalize(3),
  },
});

export default styles;
