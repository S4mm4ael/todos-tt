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
  floatingBtn: {
    position: "absolute",
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    bottom: 20,
    right: 20,
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
});

export default styles;
