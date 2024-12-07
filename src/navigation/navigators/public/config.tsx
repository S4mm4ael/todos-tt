import React from "react";
import BackButton from "../../../components/Buttons/BackButton";
import {HeaderOptionsProps} from "../../schemas";

export const headerOptions = ({navigation}: HeaderOptionsProps) => ({
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerTransparent: true,
  headerTitle: "",
  headerLeft: () => <BackButton navigation={navigation} />,
});
