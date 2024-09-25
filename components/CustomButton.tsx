import { COLORS } from "@/assets/colors";
import { hp, wp } from "@/utils/responsive";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const CustomButton = ({ title, onPress, outlined, color, isLoading }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outlined ? styles.outlined : { backgroundColor: color || COLORS.black },
        outlined && { borderColor: color || COLORS.black },
      ]}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.white} size={"small"} />
      ) : (
        <Text
          style={[
            styles.text,
            outlined
              ? { color: color || COLORS.black }
              : { color: COLORS.white },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(12),
    borderRadius: hp(1),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp(2),
  },
  outlined: {
    borderWidth: 2,
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CustomButton;
