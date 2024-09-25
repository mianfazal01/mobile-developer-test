import { Colors } from "@/constants/Colors";
import { hp, wp } from "@/utils/responsive";
import { StyleSheet } from "react-native";
import { COLORS } from "@/assets/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(5),
  },
  cardContainer: {
    borderWidth: wp(0.2),
    padding: wp(5),
    marginBottom: hp(2),
    borderRadius: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: hp(6),
  },
  activityView: {
    marginTop: hp(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
