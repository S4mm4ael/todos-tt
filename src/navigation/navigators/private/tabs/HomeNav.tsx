import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ROUTES} from "../../../../constants/routes";
import Home from "../../../../screens/Home";
import {tabBarHeaderOptions} from "../config";
import {HomeStackNavigatorParamList} from "../../../schemas";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

function HomeNav() {
  return (
    <HomeStack.Navigator initialRouteName={ROUTES.HOME}>
      <HomeStack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={tabBarHeaderOptions}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNav;
