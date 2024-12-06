import React from "react";
import {StatusBar, useColorScheme} from "react-native";
import styles from "./styles";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {RootNavigator} from "./navigation/navigators";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {COLORS} from "./constants/colors";

import Config from "react-native-config";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.WHITE,
    flex: 1,
  };

  console.log("ENVIRONMENT", Config.API_BASE_URL);

  return (
    <GestureHandlerRootView style={styles.fullScreen}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
