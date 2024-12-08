import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  value: {
    fontSize: 20,
  },
  logoutBtn: {
    backgroundColor: COLORS.DANGER,
    borderColor: COLORS.DANGER,
  },
});
