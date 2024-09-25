import { Colors } from "@/constants/Colors";
import { hp, wp } from "@/utils/responsive";
import { StyleSheet } from "react-native";
import { COLORS } from "@/assets/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: wp(5),
  },
  titlePage: {
    marginVertical: hp(4),
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.black,
  },
  recordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(1),
  },
  labelText: {
    fontSize: 14,
    fontWeight: "600",
  },
  valueText: {
    fontSize: 14,
    fontWeight: "600",
    // textAlign: "right",
  },
  imagStyle: {
    width: wp(20),
    height: wp(20),
  },
  imgContainer: {
    alignSelf: "center",
  },
});
