import React from "react";
import {RouteProp} from "@react-navigation/native";
import {StyleSheet, ViewProps, Text} from "react-native";
import {BottomTabNavigatorParamList, TabBarOptionsProps} from "../../schemas";
import {getTabBarIcon, tabBarName} from "../../utils";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {COLORS} from "../../../constants/colors";

export const tabBarHeaderOptions = {
  headerShown: false,
};

export const tabNavigatorOptions = ({
  route,
}: TabBarOptionsProps): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarShowLabel: true,
  tabBarActiveTintColor: COLORS.PRIMARY,
  tabBarInactiveTintColor: COLORS.LIGHT_GRAY,
  tabBarStyle: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: COLORS.WHITE,
  },
  tabBarIcon: ({focused}) => {
    const {Icon} = getTabBarIcon(route);
    return <Icon color={focused ? COLORS.PRIMARY : COLORS.BLACK} />;
  },
  tabBarLabel: ({focused}) => {
    const label = tabBarName[route?.name || ("" as keyof typeof tabBarName)];
    return (
      <Text style={{color: focused ? COLORS.PRIMARY : COLORS.LIGHT_GRAY}}>
        {label}
      </Text>
    );
  },
});

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    textAlign: "center",
  },
});
