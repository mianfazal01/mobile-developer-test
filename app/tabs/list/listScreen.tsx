import React, { useEffect } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";

import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { COLORS } from "@/assets/colors";
import { styles } from "./StyleSheet/listFileStyle";

import { getAllUserRecordApi } from "@/constants/api/dashboardApi";
import { useMutation } from "@tanstack/react-query";

const ListScreen = () => {
  const {
    mutate: getUserListApiCalling,
    data,
    isPending,
  } = useMutation({
    mutationFn: () => getAllUserRecordApi(),
    onSuccess: (data) => {},
    onError: (error) => {},
  });

  useEffect(() => {
    getUserListApiCalling();
  }, []);
  return (
    <ThemedSafeAreaView>
      <View style={styles.mainContainer}>
        {isPending ? (
          <View style={styles.activityView}>
            <ActivityIndicator size={"large"} color={COLORS.black} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item?.id}
            data={data?.data}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.cardContainer}>
                  <View>
                    <Text>{`${item?.first_name} ${item?.last_name}`}</Text>
                    <Text>{item?.email}</Text>
                  </View>
                  <Image
                    style={styles.imagStyle}
                    source={{ uri: item?.avatar }}
                  />
                </View>
              );
            }}
          />
        )}
      </View>
    </ThemedSafeAreaView>
  );
};

export default ListScreen;
