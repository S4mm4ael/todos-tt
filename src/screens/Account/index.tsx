import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const AccountScreen: React.FC = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AccountScreen;
