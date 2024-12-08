import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";
import {normalize} from "../../helpers";

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: COLORS.MODAL_BACKGROUND,
  },
  activityIndicatorWrapper: {
    backgroundColor: COLORS.WHITE,
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(10),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
