import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";
import {normalize} from "../../helpers";

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: normalize(20),
  },
  container: {
    paddingTop: normalize(20),
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: normalize(8),
  },
  signUpBlock: {
    flexDirection: "row",
    gap: normalize(6),
    marginTop: normalize(8),
  },
  signUpBtn: {
    fontSize: normalize(6),
    color: COLORS.PRIMARY,
  },
  textHelper: {
    fontSize: normalize(6),
    color: COLORS.BLACK,
  },
  errorContainer: {
    marginBottom: normalize(10),
  },
});
export {styles};
