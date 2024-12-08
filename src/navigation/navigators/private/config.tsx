import React from "react";
import {Text} from "react-native";
import {TabBarOptionsProps} from "../../schemas";
import {getTabBarIcon, tabBarName} from "../../utils";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {COLORS} from "../../../constants/colors";
import {normalize, isIOS} from "../../../helpers";

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
    height: isIOS ? normalize(40) : normalize(30),
    justifyContent: "center",
    alignItems: "center",
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
