import React, {ForwardedRef, useState} from "react";
import {View, TextInput, TouchableOpacity, Pressable, Text} from "react-native";

import {InputProps} from "../interfaces";
import styles from "./styles";
import {COLORS} from "../../../constants/colors";
import {ClosedEyeIcon, OpenedEyeIcon} from "../../../assets/svg";
import {ValidationWarning} from "../../ValidationWarning";
import {normalize} from "../../../helpers";

const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<TextInput>) => {
    const {
      containerStyle,
      inputStyle,
      icon: Icon,
      endIcon: EndIcon,
      errorMessage,
      label,
      letterCounter,
      isPasswordField = false,
      variant = "outline",
      iconClickHandler,
      endIconClickHandler,
      bottomInfo,
      disabledEndIcon = false,
      ...rest
    } = props;

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const toggleSecureTextEntry = () => setSecureTextEntry((value) => !value);
    const isMaxLengthReached = rest.value?.length === letterCounter;
    return (
      <View style={containerStyle}>
        <View style={styles.textPosition}>
          {label ? (
            <Text style={[styles.label, rest.labelStyle]}>{label}</Text>
          ) : null}
          {letterCounter && (
            <Text
              style={[
                styles.label,
                {color: isMaxLengthReached ? COLORS.PRIMARY : COLORS.BLACK},
              ]}
            >
              {rest.value?.length}/{letterCounter}
            </Text>
          )}
        </View>

        <View style={styles.container}>
          <TextInput
            ref={ref}
            maxLength={letterCounter ?? undefined}
            secureTextEntry={isPasswordField ? secureTextEntry : false}
            {...rest}
            placeholderTextColor={COLORS.LIGHT_GRAY}
            placeholder={rest.placeholder ? rest.placeholder : ""}
            style={[
              styles.input,
              variant === "solid" ? styles.inputSolid : {},
              inputStyle,
              errorMessage ? styles.inputError : {},
              isMaxLengthReached ? styles.inputError : {},
              Icon ? styles.inputLefPadding : {},
              isPasswordField ? styles.inputRightPadding : {},
              rest.style,
              {paddingRight: EndIcon ? normalize(20) : 0},
            ]}
          />
          {bottomInfo && <Text style={styles.bottomInfo}>{bottomInfo}</Text>}
          {Icon ? (
            <Pressable
              onPress={iconClickHandler && iconClickHandler}
              style={styles.icon}
            >
              <Icon />
            </Pressable>
          ) : null}
          {isPasswordField ? (
            <TouchableOpacity
              hitSlop={12}
              onPress={toggleSecureTextEntry}
              activeOpacity={0.7}
              style={styles.eye}
            >
              {secureTextEntry ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
            </TouchableOpacity>
          ) : null}
          {EndIcon ? (
            <Pressable
              onPress={endIconClickHandler && endIconClickHandler}
              style={styles.eye}
              disabled={disabledEndIcon}
            >
              <EndIcon />
            </Pressable>
          ) : null}
        </View>
        <ValidationWarning errorMessage={errorMessage} />
      </View>
    );
  }
);

export default Input;
