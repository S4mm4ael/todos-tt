import React, {useEffect, useRef, useState} from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import {observer} from "mobx-react-lite";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";
import authStore from "../../stores/AuthStore";

const config = {
  screens: {},
};

const linking = {
  prefixes: [],
  config: config,
};

export const RootNavigator = observer(() => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;
        if (currentRouteName && previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;
        }
      }}
    >
      {authStore.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
});
