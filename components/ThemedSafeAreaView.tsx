import React from "react";
import { SafeAreaView, StyleSheet, ViewStyle, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/useThemeColor"; // Adjust import path as needed

export type ThemedSafeAreaViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedSafeAreaView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedSafeAreaViewProps) {
  const insets = useSafeAreaInsets(); // Get safe area insets for padding

  // Get the appropriate background color based on the theme
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  // Combine the background color with any additional styles
  const combinedStyle = [
    styles.safeArea,
    { backgroundColor, paddingTop: insets.top, paddingBottom: insets.bottom },
    style,
  ] as ViewStyle[];

  return <SafeAreaView style={combinedStyle} {...otherProps} />;
}

// Default styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure the view takes up the full available space
  },
});
