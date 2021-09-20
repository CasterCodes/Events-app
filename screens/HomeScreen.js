import React from "react";
import { View, Text } from "react-native";

import globalStyles from "../styles/globalStyles";

const HomeScreen = () => {
  return (
    <View style={globalStyles.AndroidSafeArea}>
      <Text style={{ color: "black" }}>hELLO</Text>
    </View>
  );
};

export default HomeScreen;
