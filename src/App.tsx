import React from "react";
import {StatusBar, useColorScheme} from "react-native";
import styles from "./styles";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {RootNavigator} from "./navigation/navigators";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "mobx-react";
import authStore from "./stores/AuthStore";
import {COLORS} from "./constants/colors";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.WHITE,
    flex: 1,
  };

  return (
    <GestureHandlerRootView style={styles.fullScreen}>
      <SafeAreaProvider>
        <Provider authStore={authStore}>
          <StatusBar
            barStyle={isDarkMode ? "light-content" : "dark-content"}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <RootNavigator />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
