import React, { useState } from "react";
import { Alert, Keyboard, Text, TouchableOpacity, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import FormInput from "@/components/FormInput";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { RegisterAccount } from "@/constants/api/authApi";
import { setAccessToken, setEmailAddress } from "@/redux/slices/userSlice";
import { loginValidation } from "@/utils/validation";
import { styles } from "./StyleSheet/loginFileStyle";

import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { mutate: RegisterApiCalling, isPending } = useMutation({
    mutationFn: (values) => RegisterAccount(values),
    onSuccess: (data, values: any) => {
      dispatch(setEmailAddress(values?.email));
      dispatch(setAccessToken(data?.token));
      router.replace("/tabs/home");
    },
    onError: (error) => {
      Alert.alert(error?.response?.data?.error);
    },
  });

  return (
    <ThemedSafeAreaView>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginValidation}
            onSubmit={(values) => {
              Keyboard.dismiss();
              RegisterApiCalling(values);
            }}
          >
            {(formikProps) => (
              <View style={styles.formikContainer}>
                <FormInput
                  placeholder="Enter email address"
                  onChangeText={formikProps.handleChange("email")}
                  onBlur={formikProps.handleBlur("email")}
                  keyboardType="email-address"
                  autoComplete="email"
                  textContentType="emailAddress"
                  errorMsg={formikProps.errors.email}
                  appendComponent={
                    <View style={styles.iconContainer}>
                      <Ionicons name="mail-outline" size={20} color="#666" />
                    </View>
                  }
                />
                <FormInput
                  value={formikProps.values.password}
                  placeholder="Enter your password"
                  onChangeText={formikProps.handleChange("password")}
                  onBlur={formikProps.handleBlur("password")}
                  autoComplete="password"
                  textContentType="password"
                  secureTextEntry={!showPassword}
                  errorMsg={formikProps.errors.password}
                  appendComponent={
                    <TouchableOpacity
                      style={styles.iconContainer}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Ionicons
                        name={showPassword ? "eye" : "eye-off"}
                        size={20}
                        color="#666"
                      />
                    </TouchableOpacity>
                  }
                />

                <CustomButton
                  isLoading={isPending}
                  title={"Sign Up"}
                  onPress={() => formikProps.handleSubmit()}
                />
                <View>
                  <Text style={styles.bottomtext}>
                    Already have an account?{" "}
                    <Text
                      onPress={() => router.navigate("/auth/login")}
                      style={styles.bottomInnerText}
                    >
                      Sign In
                    </Text>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </ThemedSafeAreaView>
  );
};

export default Register;
