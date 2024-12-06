import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 80,
  },
  logoTitle: {
    fontSize: 27,
    lineHeight: 38,
    color: COLORS.BLACK,
  },
  container: {
    paddingTop: 80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 24,
  },
  signUpBlock: {
    flexDirection: "row",
    gap: 10,
  },
  signUpBtn: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
  text1: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
});
export {styles};
