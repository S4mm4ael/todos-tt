import React from "react";
import {SafeAreaView, StatusBar, Text, useColorScheme} from "react-native";
import styles from "./styles";
import {GestureHandlerRootView} from "react-native-gesture-handler";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <GestureHandlerRootView style={styles.fullScreen}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <Text>RNAPP</Text>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
