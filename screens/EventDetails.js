import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { UpcomingEvents, EventResponseModal } from "../components";

import events from "../assets/data/events";

const { width, height } = Dimensions.get("window");

const EventDetails = () => {
  const [iconFixed, setIconFixed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const { eventId } = route.params;
  const navigation = useNavigation();
  const singleEvent = events.find((event) => event.id === eventId);

  const handleIconPosition = (e) => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    if (scrollPosition > 68) {
      setIconFixed(true);
    } else {
      setIconFixed(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {iconFixed && (
        <View
          elevation={1}
          style={[
            {
              flex: 0.1,
              paddingHorizontal: 4,
              flexDirection: "row",
              paddingTop: StatusBar.currentHeight - 10,
              alignItems: "center",
              borderBottomWidth: 1.2,
              borderBottomColor: "gray",
            },
          ]}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={34} color="black" />
          </Pressable>
          <Text style={[styles.eventTitle, { marginLeft: 20 }]}>
            {singleEvent.title}
          </Text>
        </View>
      )}

      <ScrollView onScroll={handleIconPosition} style={{ flex: 0.6 }}>
        <View style={styles.imageContainer}>
          <Image
            source={singleEvent.photo}
            style={{ width: "100%", height: height / 2, resizeMode: "cover" }}
          />
          <Pressable
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={34} color="white" />
          </Pressable>
        </View>
        <View style={styles.eventContainer}>
          <View style={styles.eventTime}>
            <EvilIcons name="calendar" size={24} color="black" />
            <Text style={styles.date}>{singleEvent.startDate}</Text>
            <Text style={styles.time}>{singleEvent.startTime}</Text>
          </View>
          <Text style={styles.eventTitle}>{singleEvent.title}</Text>
          <View>
            <Text style={styles.eventPrivancy}>{singleEvent.privancy}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Entypo
              name="location-pin"
              size={28}
              color="#33373d"
              style={{ marginLeft: -7 }}
            />
            <Text style={styles.location}>{singleEvent.location}</Text>
          </View>
          <View style={styles.buttonConatiner}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#037ffc" }]}
              elevation={24}>
              <MaterialCommunityIcons name="walk" size={24} color="white" />
              <Text style={styles.buttonText}>Going</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} elevation={24}>
              <AntDesign name="staro" size={24} color="white" />
              <Text style={styles.buttonText}>Interested</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.eventDetails}>
            <View style={styles.goingGroup}>
              <MaterialIcons name="group" size={24} color="#33373d" />
              <Text style={styles.goingText}>
                2,456 Going . 2, 569 Interested
              </Text>
            </View>
          </View>
          <View style={styles.eventBy}>
            <Entypo name="user" size={22} color="#33373d" />
            <Text style={[styles.goingText]}>Event hosted by Kevin Caster</Text>
          </View>
          <View style={styles.eventBy}>
            <Ionicons name="earth" size={24} color="#33373d" />
            <Text style={[styles.goingText]}>
              Public Event - Anyone can attend the event
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Event Description</Text>
            <Text style={styles.descriptionText}>
              {singleEvent.description}
            </Text>
          </View>
        </View>
        <View style={styles.suggestedEvents}>
          <View style={styles.suggestedHeader}>
            <Text style={styles.suggestedTitle}>Suggested Events</Text>
          </View>
          <View style={styles.suggestedBody}>
            <UpcomingEvents events={events} setModalVisible={setModalVisible} />
          </View>
        </View>
        <View style={{ paddingHorizontal: 4, marginBottom: 20 }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#037ffc", padding: 12 }]}
            elevation={24}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Discover More Events</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <EventResponseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 4,
    width: width,
    height: height / 9,
  },
  eventTime: {
    flexDirection: "row",
  },
  date: {
    fontWeight: "bold",
    color: "#282c30",
  },
  time: {
    marginLeft: 4,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#282c30",
  },
  eventContainer: {
    padding: 8,
  },
  eventPrivancy: {
    fontWeight: "bold",
    color: "gray",
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a4891",
    flex: 0.485,
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 16,
  },
  eventDetails: {
    marginTop: 8,
  },
  goingGroup: {
    flexDirection: "row",
    alignItems: "center",
  },

  goingText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  eventBy: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  descriptionContainer: {
    padding: 5,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#282c30",
    marginVertical: 8,
  },
  descriptionText: {
    lineHeight: 24,
    fontWeight: "bold",
    color: "gray",
    fontSize: 14,
  },

  suggestedEvents: {
    backgroundColor: "#ebf2ed",
  },

  suggestedHeader: {
    padding: 8,
  },

  suggestedTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default EventDetails;
