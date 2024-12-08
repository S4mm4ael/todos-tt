import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";
import {normalize} from "../../helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(10),
  },
  title: {
    fontSize: normalize(12),
    fontWeight: "bold",
    marginBottom: normalize(8),
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: normalize(10),
  },
  infoContainer: {
    marginBottom: normalize(10),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: normalize(6),
  },
  label: {
    fontSize: normalize(10),
    fontWeight: "bold",
  },
  value: {
    fontSize: normalize(10),
  },
  logoutBtn: {
    backgroundColor: COLORS.DANGER,
    borderColor: COLORS.DANGER,
  },
});
