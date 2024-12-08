import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants/colors";
import {windowWidth, normalize} from "../../../helpers";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth - normalize(16),
    padding: normalize(6),
    borderBottomWidth: normalize(1),
    borderBottomColor: COLORS.LIGHT,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: normalize(6),
    marginLeft: normalize(6),
    paddingRight: normalize(6),
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: COLORS.INFO,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: normalize(6),
    marginLeft: normalize(4),
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  editButton: {
    padding: normalize(4),
  },
  controlPanel: {
    gap: normalize(4),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backDropColor: {backgroundColor: COLORS.DARK},

  bottomSheet: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: normalize(4),
  },
  modalBody: {
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: normalize(12),
    lineHeight: normalize(12),
    textAlign: "center",
    paddingVertical: normalize(8),
    fontWeight: "bold",
  },
  question: {
    fontSize: normalize(8),
    lineHeight: normalize(8),
    textAlign: "center",
  },
  info: {
    fontSize: normalize(8),
    lineHeight: normalize(8),
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 0,
    minWidth: normalize(100),
    marginBottom: normalize(10),
  },
  deleteButton: {
    backgroundColor: COLORS.DANGER,
    borderWidth: 0,
    minWidth: normalize(100),
  },
  input: {
    width: windowWidth - normalize(20),
  },
});

export default styles;
