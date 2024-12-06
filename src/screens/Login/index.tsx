import React, {useState} from "react";
import {View, Text, Pressable, Button, StyleSheet} from "react-native";
import {observer} from "mobx-react-lite";
import authStore from "../../stores/AuthStore";
import {COLORS} from "../../constants/colors";
import {ROUTES} from "../../constants/routes";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useForm} from "react-hook-form";
import {ControlledInput} from "../../components/Inputs/ControlledInput";
import {ValidationWarning} from "../../components/ValidationWarning";
import {Box} from "../../components/Containers/BoxedContainer";
import {AppMainLogo} from "../../assets/svg";

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
          <Box>
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
          </Box>

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

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 80,
  },
  logoTitle: {
    fontSize: 27,
    lineHeight: 38,
    color: COLORS.BLACK,
  },
  container: {
    paddingTop: 80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 24,
  },
  signUpBlock: {
    flexDirection: "row",
    gap: 10,
  },
  signUpBtn: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
  text1: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
});

export default Login;
