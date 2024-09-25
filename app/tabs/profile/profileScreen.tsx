import CustomButton from "@/components/CustomButton";
import FormInput from "@/components/FormInput";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { setAccessToken, setUserData } from "@/redux/slices/userSlice";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./StyleSheet/ProfileFileStyle";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const userData = useSelector((state: any) => state.user.userData);
  const [firstName, setFirstName] = useState(userData[0]?.first_name);
  const [lastName, setLastName] = useState(userData[0]?.last_name);
  const [email, setEmail] = useState(userData[0]?.email);
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(
      setUserData([{ first_name: firstName, last_name: lastName, email }])
    );
    setIsEditing(false);
    Alert.alert("Profile update successfully.");
  };
  return (
    <ThemedSafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.titlePage}>User Record</Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imagStyle}
            source={{ uri: userData[0]?.avatar }}
          />
        </View>
        <View>
          <FormInput
            editable={isEditing}
            label="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
        <View>
          <FormInput
            editable={isEditing}
            label="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <View>
          <FormInput
            editable={false}
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            input={{ opacity: 0.2 }}
          />
        </View>

        <TouchableOpacity
          style={styles.editIcon}
          onPress={isEditing ? handleSave : handleEditToggle}
        >
          <MaterialIcons
            name={isEditing ? "save" : "edit"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <CustomButton
          onPress={() => {
            dispatch(setAccessToken(null));
            router.replace("/auth/login");
          }}
          title={"Logout"}
        />
      </View>
    </ThemedSafeAreaView>
  );
};

export default ProfileScreen;
