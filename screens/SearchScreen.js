import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";

const SearchScreen = () => {
  return (
    <View style={globalStyles.AndroidSafeArea}>
      <View style={styles.textInputContainer}>
        <AntDesign name="search1" size={24} color="gray" />
        <TextInput
          placeholder="Search for Events"
          style={styles.textInput}
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 0.7,
    marginTop: 20,
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  textInput: {
    marginLeft: 12,
  },
});
export default SearchScreen;
