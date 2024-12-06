import React from "react";
import {StatusBar, useColorScheme} from "react-native";
import styles from "./styles";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {RootNavigator} from "./navigation/navigators";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "mobx-react";
import authStore from "./stores/AuthStore";
import {COLORS} from "./constants/colors";
import LoadingOverlay from "./components/LoadingOverlay";
import {PortalProvider} from "@gorhom/portal";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundColor = isDarkMode ? COLORS.DARK : COLORS.LIGHT;

  return (
    <GestureHandlerRootView style={styles.fullScreen}>
      <PortalProvider>
        <SafeAreaProvider>
          <Provider authStore={authStore}>
            <StatusBar
              barStyle={isDarkMode ? "light-content" : "dark-content"}
              backgroundColor={backgroundColor}
            />
            <BottomSheetModalProvider>
              <RootNavigator />
            </BottomSheetModalProvider>
            <LoadingOverlay />
          </Provider>
        </SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
