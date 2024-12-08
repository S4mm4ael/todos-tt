import React from "react";
import {View, ActivityIndicator, Modal} from "react-native";
import {observer} from "mobx-react-lite";
import {authStore, toDosStore} from "../../stores";
import {COLORS} from "../../constants/colors";
import styles from "./styles";

const LoadingOverlay = observer(() => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={authStore.loading || toDosStore.loading}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      </View>
    </Modal>
  );
});

export default LoadingOverlay;
