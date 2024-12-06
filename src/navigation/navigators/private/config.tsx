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
  tabBarShowLabel: false,
  tabBarActiveTintColor: "black",
  tabBarInactiveTintColor: "black",
  tabBarStyle: {
    height: 78,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: ({focused}) => {
    const {Icon} = getTabBarIcon(route);
    return (
      <IconWrapper route={route} focused={focused}>
        <Icon color={focused ? COLORS.PRIMARY : COLORS.BLACK} />
      </IconWrapper>
    );
  },
});

interface IconWrapperProps extends ViewProps {
  route?: RouteProp<BottomTabNavigatorParamList>;
  focused: boolean;
}

const IconWrapper = ({route, children, focused}: IconWrapperProps) => (
  <>
    {children}
    <Text
      style={[
        styles.tabBarLabel,
        {color: focused ? COLORS.PRIMARY : COLORS.BLACK},
      ]}
    >
      {route ? tabBarName[route.name] : ""}
    </Text>
  </>
);

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
  },
});
