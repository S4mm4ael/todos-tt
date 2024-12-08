import React from "react";
import {TouchableOpacity} from "react-native";
import {HeaderOptionsProps} from "../../../navigation/schemas";
import {ArrowIcon} from "../../../assets/svg";
import styles from "./style";

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
