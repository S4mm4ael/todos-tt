import React from "react";
import {View} from "react-native";

import {ActivityIndicator, TouchableOpacity, Text} from "react-native";
import {BaseButtonProps, BUTTON_TYPE} from "./interfaces";
import {styles} from "./styles";
import {COLORS} from "../../../constants/colors";

const BaseButton = ({
  title,
  onPress = () => {},
  type = BUTTON_TYPE.PRIMARY,
  disabled = false,
  loading = false,
  icon: Icon,
  endIcon: EndIcon,
  containerStyle,
  textStyle,
  activeOpacity = 0.8,
}: BaseButtonProps) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    onPress={onPress}
    style={[
      styles.container,
      styles[type],
      containerStyle,
      disabled
        ? {backgroundColor: COLORS.LIGHT_GRAY, borderColor: COLORS.LIGHT_GRAY}
        : null,
    ]}
    disabled={disabled || loading}
  >
    {loading ? (
      <ActivityIndicator color={COLORS.WHITE} />
    ) : (
      <>
        {Icon && (
          <View style={styles.icon}>
            <Icon />
          </View>
        )}
        <Text
          style={[
            type === BUTTON_TYPE.LINK ? styles.textLink : styles.text,
            textStyle,
          ]}
        >
          {title}
        </Text>
        {EndIcon && (
          <View style={[styles.icon, styles.endIcon]}>
            <EndIcon />
          </View>
        )}
      </>
    )}
  </TouchableOpacity>
);

export default BaseButton;
