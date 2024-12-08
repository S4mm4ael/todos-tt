import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";
import {normalize} from "../../helpers";

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(2),
    paddingLeft: 2,
  },
  warningText: {
    marginLeft: normalize(2),
    color: COLORS.DANGER,
    fontSize: normalize(6),
    lineHeight: normalize(6),
  },
});

export {styles};
