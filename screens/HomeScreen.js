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
import { Checkbox } from "react-native-paper";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { EventItem, UpcomingEvents, EventsHeader } from "../components";
import events from "../assets/data/events";

const HomeScreen = () => {
  const [absolutePosition, setAbsolutePosition] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState(false);

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
    console.log(modalScrollPosition);
  };
  return (
    <View style={globalStyles.AndroidSafeArea}>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={{}} elevation={14} style={styles.modalContainer}>
            <Pressable
              style={styles.modalHeader}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalHeaderTitle}>Your Response</Text>
            </Pressable>
            <View style={styles.modalBody}>
              <View style={styles.modalItem}>
                <View style={styles.modalItemLeft}>
                  <View style={styles.iconContainer}>
                    <AntDesign name="star" size={24} color="white" />
                  </View>
                  <Text style={styles.itemTitle}>Interested</Text>
                </View>
                <View style={styles.modalItemRight}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                </View>
              </View>
              <View style={styles.modalItem}>
                <View style={styles.modalItemLeft}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="checkmark-circle" size={24} color="white" />
                  </View>
                  <Text style={styles.itemTitle}>Attending</Text>
                </View>
                <View style={styles.modalItemRight}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                </View>
              </View>
              <View style={styles.modalItem}>
                <View style={styles.modalItemLeft}>
                  <View style={styles.iconContainer}>
                    <Entypo name="circle-with-cross" size={24} color="white" />
                  </View>
                  <Text style={styles.itemTitle}>Not Interested</Text>
                </View>
                <View style={styles.modalItemRight}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
