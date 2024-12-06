import {StyleSheet} from "react-native";
import {windowWidth} from "../../helpers";

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 24,
  },
  subTitle: {
    width: windowWidth,
    letterSpacing: -0.31,
    paddingBottom: 24,
    fontSize: 24,
    textAlign: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 80,
  },
});

export {styles};
