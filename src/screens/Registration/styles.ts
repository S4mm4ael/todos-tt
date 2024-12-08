import {StyleSheet} from "react-native";
import {windowWidth, normalize} from "../../helpers";

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(20),
    paddingBottom: normalize(10),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: normalize(8),
  },
  subTitle: {
    width: windowWidth,
    paddingBottom: normalize(10),
    fontSize: normalize(12),
    textAlign: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});

export {styles};
