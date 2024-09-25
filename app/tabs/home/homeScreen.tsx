import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { setUserData } from "@/redux/slices/userSlice";
import { getAllUserRecordApi } from "../../../constants/api/dashboardApi";
import { styles } from "./StyleSheet/homeFileStyle";

import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const emailUser = useSelector((state: any) => state.user.emailAddress);
  const userData = useSelector((state: any) => state.user.userData);
  console.log("emailUser :>> ", userData);
  const { mutate: getUserListApiCalling, isPending } = useMutation({
    mutationFn: () => getAllUserRecordApi(),
    onSuccess: (data) => {
      const getCurrentUser = data?.data?.filter((item: any) => {
        return item?.email == emailUser;
      });

      dispatch(setUserData(getCurrentUser));
    },
    onError: (error) => {
      console.log("error :>> ", error);
    },
  });

  useEffect(() => {
    getUserListApiCalling();
  }, []);

  return (
    <ThemedSafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.titlePage}>User Record</Text>

        <View style={styles.recordRow}>
          <Text style={styles.labelText}>Full Name:</Text>
          <Text
            style={styles.valueText}
          >{`${userData[0]?.first_name} ${userData[0]?.last_name}`}</Text>
        </View>
      </View>
    </ThemedSafeAreaView>
  );
};

export default HomeScreen;
