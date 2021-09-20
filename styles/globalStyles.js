import { StyleSheet, Platform, StatusBar } from "react-native";

const globalStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default globalStyles;
