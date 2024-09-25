import { Colors } from "@/constants/Colors";
import { hp, wp } from "@/utils/responsive";
import { StyleSheet } from "react-native";
import { COLORS } from "@/assets/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(5),
  },

  buttonContainer: {
    marginTop: hp(15),
  },
  formikContainer: {
    marginTop: hp(20),
  },
  bottomtext: {
    marginTop: hp(3),
    textAlign: "center",
  },
  bottomInnerText: {
    textDecorationLine: "underline",
    fontWeight: "500",
    color: COLORS.black,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    right: wp(2),
  },
});
