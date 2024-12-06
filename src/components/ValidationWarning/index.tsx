import React from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";
import {ExclamationPointIcon} from "../../assets/svg";

interface Props {
  errorMessage?: string;
}

export const ValidationWarning = ({errorMessage}: Props) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <View style={styles.warningContainer}>
      <ExclamationPointIcon />
      <Text style={styles.warningText}>{errorMessage}</Text>
    </View>
  );
};
