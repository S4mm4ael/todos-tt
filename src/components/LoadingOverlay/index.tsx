// src/components/LoadingOverlay.tsx
import React from "react";
import {View, ActivityIndicator, StyleSheet, Modal} from "react-native";
import {observer} from "mobx-react-lite";
import authStore from "../../stores/AuthStore";
import {COLORS} from "../../constants/colors";

const LoadingOverlay = observer(() => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={authStore.loading}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingOverlay;
