import React, {ForwardedRef} from "react";
import {TextInput} from "react-native";
import {useController, Control, UseFormSetValue} from "react-hook-form";
import {InputProps} from "../interfaces";
import {Input} from "../BaseInput";

interface ControlledInputProps extends InputProps {
  name: string;

  control: Control<any>;
  setValue?: UseFormSetValue<any>;
}

export const ControlledInput = React.forwardRef(
  (
    {name, control, ...props}: ControlledInputProps,
    ref: ForwardedRef<TextInput>
  ) => {
    const {
      field: {value, onChange},
    } = useController({
      control,
      defaultValue: "",
      name,
    });

    return <Input ref={ref} {...props} value={value} onChangeText={onChange} />;
  }
);

export {Input};
