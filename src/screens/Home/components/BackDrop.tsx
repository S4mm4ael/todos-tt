import React from "react";
import {BottomSheetBackdropProps} from "@gorhom/bottom-sheet";
import {Pressable, StyleSheet} from "react-native";
import styles from "./styles";

interface BackDropProps extends BottomSheetBackdropProps {
  onPress: () => void;
}

const BackDrop = ({style, onPress}: BackDropProps) => {
  return <Pressable onPress={onPress} style={[style, styles.backDropColor]} />;
};

export default BackDrop;
