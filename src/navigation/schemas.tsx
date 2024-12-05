import {StackNavigationProp} from "@react-navigation/stack";
import {ROUTES, TABS} from "../constants/routes";
import {ParamListBase, RouteProp} from "@react-navigation/native";

export type HomeStackNavigatorParamList = {
  [ROUTES.HOME]: undefined;
  [TABS.ACCOUNT]: undefined;
};

export type AccountStackNavigatorParamList = {
  [ROUTES.ACCOUNT]: undefined;
};

export type BottomTabNavigatorParamList = {
  [TABS.HOME]: HomeStackNavigatorParamList;
  [TABS.ACCOUNT]: AccountStackNavigatorParamList;
};

export interface TabBarOptionsProps {
  navigation: StackNavigationProp<BottomTabNavigatorParamList>;
  route?: RouteProp<BottomTabNavigatorParamList>;
}

export interface HeaderOptionsProps {
  navigation: StackNavigationProp<ParamListBase, string>;
  route?: RouteProp<ParamListBase, string>;
}
