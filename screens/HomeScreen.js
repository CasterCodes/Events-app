import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Modal,
  Text,
  Dimensions,
  Pressable,
} from "react-native";

import globalStyles from "../styles/globalStyles";
import {
  EventItem,
  UpcomingEvents,
  EventsHeader,
  EventResponseModal,
} from "../components";
import events from "../assets/data/events";

const HomeScreen = () => {
  const [absolutePosition, setAbsolutePosition] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleScroll = (e) => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    if (scrollPosition >= 374) {
      setAbsolutePosition(true);
    } else {
      setAbsolutePosition(false);
    }
  };

  const hideModalScroll = (e) => {
    const modalScrollPosition = e.nativeEvent.contentOffset.y;
  };
  return (
    <View style={globalStyles.AndroidSafeArea}>
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>EventList</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll}>
        <>
          <UpcomingEvents events={events} setModalVisible={setModalVisible} />
          <View
            style={[
              { padding: 8 },
              absolutePosition && styles.headerAbsolute,
            ]}></View>
          <FlatList
            data={events}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              if (!absolutePosition) {
                return <EventsHeader />;
              } else {
                return <View style={{ padding: 9 }} />;
              }
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <EventItem item={item} setModalVisible={setModalVisible} />
              );
            }}
          />
        </>
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={hideModalScroll}>
        <EventResponseModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  upcomingEvent: {
    padding: 2,
  },
  upcomingEventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
    paddingHorizontal: 4,
  },

  upcomingTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  modalContainer: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: Dimensions.get("window").width + 50,
  },
  modalHeader: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#b5bab6",
    borderBottomWidth: 1 / 4,
    padding: 8,
  },
  modalHeaderTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  upcomingLink: {
    color: "#037ffc",
    fontWeight: "bold",
  },
  headerAbsolute: {
    // position: "absolute",
  },

  modalBody: {
    paddingVertical: 8,
  },
  modalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  modalItemLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  itemTitle: {
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  iconContainer: {
    padding: 12,
    backgroundColor: "#538be6",
    borderRadius: 50,
  },
});

export default HomeScreen;
