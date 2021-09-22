import React from "react";
import { View, Text, FlatList } from "react-native";
import { EventItem } from "../components";

const UpcomingEvents = ({ events, setModalVisible }) => {
  return (
    <>
      <FlatList
        data={events}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventItem
            item={item}
            upcomingEvent={true}
            setModalVisible={setModalVisible}
          />
        )}
      />
    </>
  );
};

export default UpcomingEvents;
