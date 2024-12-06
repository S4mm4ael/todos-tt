import React, {useState} from "react";
import {View, Text, Pressable, Button} from "react-native";
import {observer} from "mobx-react-lite";
import {useForm} from "react-hook-form";
import authStore from "../../stores/AuthStore";
import {ROUTES} from "../../constants/routes";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ControlledInput} from "../../components/Inputs/ControlledInput";
import {ValidationWarning} from "../../components/ValidationWarning";
import {BoxedContainer} from "../../components/Containers/BoxedContainer";
import {AppMainLogo} from "../../assets/svg";
import {styles} from "./styles";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = observer(() => {
  const [error, setError] = useState<string>("");

  const {navigate} = useNavigation<any>();

  const {control, handleSubmit, reset} = useForm<FormData>({
    defaultValues: {email: "", password: ""},
  });

  const onSubmit = async ({email, password}: FormData) => {
    await authStore.login({email, password});
  };

  const goToRegistrationScreen = () => {
    navigate(ROUTES.REGISTER);
    reset();
    setError("");
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <AppMainLogo />
          </View>
          <BoxedContainer>
            <ControlledInput
              autoCapitalize="none"
              control={control}
              name="email"
              placeholder={"Enter your email"}
              label={"Email"}
              variant="solid"
              containerStyle={styles.input}
              keyboardType="email-address"
            />
            <ControlledInput
              control={control}
              name="password"
              placeholder={"Enter your password"}
              label={"Password"}
              variant="solid"
              containerStyle={styles.input}
              isPasswordField
            />
            <Button title="Login" onPress={handleSubmit(onSubmit)} />
            <ValidationWarning errorMessage={error} />
          </BoxedContainer>
          <View style={styles.signUpBlock}>
            <Text style={styles.text1}>Don't have an account?</Text>
            <Pressable onPress={goToRegistrationScreen}>
              <Text style={styles.signUpBtn}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
});

export default Login;
