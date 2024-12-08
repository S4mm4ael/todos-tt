import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {AppMainLogo} from "../../assets/svg";
import {ControlledInput} from "../../components/Inputs";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {styles} from "./styles";
import {BoxedContainer} from "../../components/Containers";
import {BaseButton} from "../../components/Buttons";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {SafeAreaView} from "react-native-safe-area-context";
import authStore from "../../stores/AuthStore";
import {observer} from "mobx-react-lite";
import {getInputFields} from "./fields";
import {ROUTES} from "../../constants/routes";

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

  const navigation = useNavigation();

  const onSubmit = async (formData: FormData) => {
    await authStore.register(formData).then(() => {
      if (!authStore.getErrorRegister) {
        navigation.navigate(ROUTES.LOGIN);
      }
    });
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
            {getInputFields().map((field) => (
              <ControlledInput
                key={field.name}
                control={control}
                name={field.name}
                placeholder={field.placeholder}
                label={field.label}
                variant={field.variant}
                containerStyle={field.containerStyle}
                autoCapitalize={field.autoCapitalize}
                keyboardType={field.keyboardType}
                isPasswordField={field.isPasswordField}
                textContentType={field.textContentType}
                errorMessage={field.errorMessage}
              />
            ))}
            <BaseButton title="Register" onPress={handleSubmit(onSubmit)} />
          </BoxedContainer>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
});

export default Register;
