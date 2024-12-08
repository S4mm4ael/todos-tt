import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants/colors";
import {windowWidth} from "../../../helpers";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth - 30,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: COLORS.INFO,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT,
  },
  editButton: {
    padding: 10,
  },
  controlPanel: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backDropColor: {backgroundColor: COLORS.DARK},

  bottomSheet: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 54,
  },
  modalBody: {
    gap: 20,
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    paddingBottom: 40,
  },
  question: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 40,
    textAlign: "center",
  },
  info: {
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 0,
    minWidth: 256,
    marginBottom: 20,
  },
  input: {
    width: windowWidth - 32,
    marginBottom: 24,
  },
});

export default styles;
