import React from "react";
import { View, Text, FlatList, Dimensions, Pressable } from "react-native";
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
              width: 75,
              paddingVertical: 8,
              marginRight: 20,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Pressable>
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "gray" }}>
                {item}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default EventsHeader;
