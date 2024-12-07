import React from "react";
import {Text, View} from "react-native";
import {BoxedContainer} from "../../components/Containers/BoxedContainer";
import {BaseButton} from "../../components/Buttons/BaseButton";
import {MMKVstorage} from "../../services/localStorage";
import {MMKV_KEYS} from "../../constants/storageKeys";
// import {useUserStore} from "../../store/useUserStore";
import {styles} from "./styles";
import {observer} from "mobx-react-lite";
import authStore from "../../stores/AuthStore";
import {ResponseSignUp} from "../../types/auth";
import {AccountIcon} from "../../assets/svg";

export const Account = observer(() => {
  const {
    email = "No data",
    first_name = "No data",
    last_name = "No data",
  } = authStore.getUser || ({} as ResponseSignUp);

  const LogOut = () => {
    MMKVstorage.set(MMKV_KEYS.ACCESS_TOKEN, "");
    authStore.logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AccountIcon />
        <Text style={styles.title}>Account Information</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{first_name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{last_name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
      </View>
      <View style={{flex: 1}} />
      <BoxedContainer>
        <BaseButton
          title="Log out"
          onPress={LogOut}
          containerStyle={styles.logoutBtn}
        />
      </BoxedContainer>
    </View>
  );
});

export {styles};
export default Account;
