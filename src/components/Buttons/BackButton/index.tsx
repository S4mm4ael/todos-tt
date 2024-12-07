import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {HeaderOptionsProps} from "../../../navigation/schemas";
import {ArrowIcon} from "../../../assets/svg";

const BackButton = ({navigation}: HeaderOptionsProps) =>
  navigation.canGoBack() ? (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <ArrowIcon />
    </TouchableOpacity>
  ) : null;

export default BackButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});
