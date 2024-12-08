import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";
import {windowWidth} from "../../helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    borderWidth: 1,
    width: 80,
    height: 80,
    backgroundColor: COLORS.LIGHT,
    borderColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    bottom: 10,
    right: 10,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
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
  },
  input: {
    width: windowWidth - 32,
    marginBottom: 24,
  },
  emptyComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyComponentText: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export default styles;
