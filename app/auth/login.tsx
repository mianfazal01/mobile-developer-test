import React, { useState } from "react";
import { View, Text, Keyboard, TouchableOpacity, Alert } from "react-native";

import { Formik } from "formik";
import { router } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { LoginAccount } from "@/constants/api/authApi";

import FormInput from "@/components/FormInput";
import CustomButton from "@/components/CustomButton";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./StyleSheet/loginFileStyle";

import { loginValidation } from "@/utils/validation";

import { useDispatch } from "react-redux";
import { setAccessToken, setEmailAddress } from "@/redux/slices/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const { mutate: LoginApiCalling, isPending } = useMutation({
    mutationFn: (values) => LoginAccount(values),
    onSuccess: (data, values) => {
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
              LoginApiCalling(values);
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
                  title={"Login"}
                  onPress={() => formikProps.handleSubmit()}
                />
                <View>
                  <Text style={styles.bottomtext}>
                    Don’t have an account?{" "}
                    <Text
                      onPress={() => router.navigate("/auth/register")}
                      style={styles.bottomInnerText}
                    >
                      Sign up Now!
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

export default Login;
