import React, {ForwardedRef} from "react";
import {TextInput} from "react-native";
import {useController, Control, UseFormSetValue} from "react-hook-form";
import {InputProps} from "../interfaces";
import BaseInput from "../BaseInput";

interface ControlledInputProps extends InputProps {
  name: string;
  rules?: object;
  control: Control<any>;
  setValue?: UseFormSetValue<any>;
}

const ControlledInput = React.forwardRef(
  (
    {name, control, rules, ...props}: ControlledInputProps,
    ref: ForwardedRef<TextInput>
  ) => {
    const {
      field: {value, onChange},
      fieldState: {error},
    } = useController({
      control,
      defaultValue: "",
      name,
      rules,
    });

    return (
      <BaseInput ref={ref} {...props} value={value} onChangeText={onChange} />
    );
  }
);

export default ControlledInput;
