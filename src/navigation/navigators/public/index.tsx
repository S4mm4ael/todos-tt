import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../../../screens/Login";
import Registration from "../../../screens/Registration";
import {ROUTES} from "../../../constants/routes";
import {headerOptions} from "./config";

const Stack = createStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={headerOptions}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Registration} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
