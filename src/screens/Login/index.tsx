import React from "react";
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {observer} from "mobx-react-lite";
import {useForm} from "react-hook-form";
import authStore from "../../stores/AuthStore";
import {ROUTES} from "../../constants/routes";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ControlledInput} from "../../components/Inputs/ControlledInput";
import {ValidationWarning} from "../../components/ValidationWarning";
import {BoxedContainer} from "../../components/Containers/BoxedContainer";
import {AppMainLogo} from "../../assets/svg";
import {styles} from "./styles";
import {BaseButton} from "../../components/Buttons/BaseButton";
import {inputFields} from "./fields";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = observer(() => {
  const {navigate} = useNavigation<any>();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isValid},
  } = useForm<FormData>({
    defaultValues: {email: "", password: ""},
    mode: "onChange",
  });

  const onSubmit = async ({email, password}: FormData) => {
    await authStore.login({email, password});
  };

  const goToRegistrationScreen = () => {
    navigate(ROUTES.REGISTER);
    reset();
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <AppMainLogo />
          </View>
          <BoxedContainer>
            {inputFields.map((field) => (
              <ControlledInput
                key={field.name}
                control={control}
                name={field.name}
                placeholder={field.placeholder}
                label={field.label}
                autoCapitalize={field.autoCapitalize}
                keyboardType={field.keyboardType}
                isPasswordField={field.isPasswordField}
                rules={field.rules}
                containerStyle={styles.input}
              />
            ))}
            {authStore.getErrorLogin && (
              <View style={styles.errorContainer}>
                <ValidationWarning errorMessage={authStore.getErrorLogin} />
              </View>
            )}
            <BaseButton
              disabled={!isValid}
              title="Login"
              onPress={handleSubmit(onSubmit)}
            />
          </BoxedContainer>
          <View style={styles.signUpBlock}>
            <Text style={styles.textHelper}>Don't have an account?</Text>
            <Pressable onPress={goToRegistrationScreen}>
              <Text style={styles.signUpBtn}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export default Login;
