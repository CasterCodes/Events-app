import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");
const categories = ["Top", "This Week", "Local", "Online"];

const EventsHeader = () => {
  return (
    <View style={{ padding: 8 }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              paddingVertical: 8,
              marginRight: 20,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#037ffc",
                padding: 8,
                width: 100,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default EventsHeader;
