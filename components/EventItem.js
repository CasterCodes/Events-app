import React from "react";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const EventItem = ({ item, upcomingEvent, setModalVisible }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.eventContainer, upcomingEvent && styles.upcomingTop]}
      elevation={16}
      onPress={() => navigation.navigate("EventDetails", { eventId: item.id })}>
      <Image
        source={item.photo}
        style={{
          width: "100%",
          height: height / 3,
          resizeMode: "cover",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      />
      <View style={styles.eventDetails}>
        <View style={styles.eventTime}>
          <EvilIcons name="calendar" size={24} color="black" />
          <Text style={styles.date}>{item.startDate}</Text>
          <Text style={styles.time}>{item.startTime}</Text>
        </View>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <View>
          <Text style={styles.eventPrivancy}>{item.privancy}</Text>
        </View>
        <View styles={styles.eventButtonContainer}>
          <TouchableOpacity
            style={styles.eventButton}
            elevation={4}
            onPress={() => setModalVisible(true)}>
            <AntDesign name="staro" size={24} color="white" />
            <Text style={styles.buttonText}>Interested</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  eventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#282c30",
  },
  eventContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 4,
    marginBottom: 20,
    borderRadius: 4,
  },
  upcomingTop: {
    width: width,
  },
  eventDetails: {
    padding: 8,
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

  eventPrivancy: {
    fontWeight: "bold",
    color: "gray",
  },
  eventButtonContainer: {},

  eventButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#037ffc",
    padding: 8,
    justifyContent: "center",
    width: "50%",
    marginTop: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "bold",
  },
});

export default EventItem;
