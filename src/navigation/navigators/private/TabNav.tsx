import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomTabNavigatorParamList} from "../../schemas";
import {TABS} from "../../../constants/routes";
import {tabNavigatorOptions} from "./config";
import {AccountNav, HomeNav} from "./tabs";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={TABS.HOME}
      screenOptions={tabNavigatorOptions}
    >
      <Tab.Screen name={TABS.HOME} component={HomeNav} />
      <Tab.Screen name={TABS.ACCOUNT} component={AccountNav} />
    </Tab.Navigator>
  );
};
