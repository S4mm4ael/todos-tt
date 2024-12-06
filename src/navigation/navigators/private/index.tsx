import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MAIN_ROUTES} from "../../../constants/routes";
import {TabNavigator} from "./TabNav";

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_ROUTES.TAB_BAR}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={MAIN_ROUTES.TAB_BAR} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
