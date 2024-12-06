import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: COLORS.WHITE,
    fontSize: 16,
    paddingHorizontal: 16,
    color: COLORS.BLACK,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: 8,
  },
  inputSolid: {
    backgroundColor: COLORS.LIGHT,
    borderColor: COLORS.LIGHT,
  },
  inputLefPadding: {
    paddingLeft: 32,
  },
  inputRightPadding: {
    paddingRight: 48,
  },
  inputError: {
    borderColor: COLORS.DANGER,
    borderWidth: 3,
  },
  icon: {
    position: "absolute",
    left: 12,
  },
  eye: {
    position: "absolute",
    right: 16,
  },
  textPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomInfo: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.BLACK,
    paddingTop: 3,
  },
});

export {styles};
