import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {AppMainLogo} from "../../assets/svg";
import {ControlledInput} from "../../components/Inputs/ControlledInput";
import {useForm} from "react-hook-form";
import {styles} from "./styles";
import {BoxedContainer} from "../../components/Containers/BoxedContainer";
import {BaseButton} from "../../components/Buttons/BaseButton";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {SafeAreaView} from "react-native-safe-area-context";
import authStore from "../../stores/AuthStore";
import {observer} from "mobx-react-lite";

interface FormData {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
}

const Register = observer(() => {
  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
    },
  });

  const onSubmit = async (formData: FormData) => {
    await authStore.register(formData);
  };

  useEffect(() => {
    return () => {
      authStore.clearErrors();
    };
  }, []);

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <AppMainLogo />
            <Text style={styles.subTitle}>Register via e-mail</Text>
          </View>
          <BoxedContainer>
            <ControlledInput
              control={control}
              name="first_name"
              placeholder={"Enter your first name"}
              label={"First name"}
              variant="solid"
              containerStyle={styles.input}
              errorMessage={authStore.getErrorRegister?.first_name?.[0] || ""}
            />
            <ControlledInput
              control={control}
              name="last_name"
              placeholder={"Enter your last name"}
              label={"Last name"}
              variant="solid"
              containerStyle={styles.input}
              errorMessage={authStore.getErrorRegister?.last_name?.[0] || ""}
            />
            <ControlledInput
              control={control}
              autoCapitalize="none"
              name="email"
              placeholder={"Enter your email"}
              label={"Email"}
              variant="solid"
              containerStyle={styles.input}
              keyboardType="email-address"
              errorMessage={authStore.getErrorRegister?.email?.[0] || ""}
            />
            <ControlledInput
              control={control}
              name="password"
              placeholder={"Enter your password"}
              label={"Password"}
              variant="solid"
              containerStyle={styles.input}
              isPasswordField
              textContentType="newPassword"
              errorMessage={authStore.getErrorRegister?.password?.[0] || ""}
            />
            <ControlledInput
              control={control}
              name="password2"
              placeholder={"Repeat your password"}
              label={"Repeat password"}
              variant="solid"
              containerStyle={styles.input}
              isPasswordField
              textContentType="newPassword"
              errorMessage={authStore.getErrorRegister?.password2?.[0] || ""}
            />
            <BaseButton title="Register" onPress={handleSubmit(onSubmit)} />
          </BoxedContainer>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
});

export default Register;
