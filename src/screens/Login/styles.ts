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
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 24,
  },
  signUpBlock: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  signUpBtn: {
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
  textHelper: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
  errorContainer: {
    marginBottom: 16,
  },
});
export {styles};
