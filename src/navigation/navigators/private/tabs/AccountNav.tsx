import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ROUTES} from "../../../../constants/routes";
import {tabBarHeaderOptions} from "../config";
import {AccountStackNavigatorParamList} from "../../../schemas";
import Account from "../../../../screens/Account";

const AccountStack =
  createNativeStackNavigator<AccountStackNavigatorParamList>();

function AccountNav() {
  return (
    <AccountStack.Navigator initialRouteName={ROUTES.ACCOUNT}>
      <AccountStack.Screen
        name={ROUTES.ACCOUNT}
        component={Account}
        options={tabBarHeaderOptions}
      />
    </AccountStack.Navigator>
  );
}

export default AccountNav;
