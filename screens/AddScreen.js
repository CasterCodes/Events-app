import React, { useState } from "react";
import moment from "moment";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  Entypo,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

import { EventEndDateModal, EventStartDateModal } from "../components";

const AddScreen = () => {
  const [startDateModal, setStartDateModal] = useState(false);
  const [endDateModal, setEndDateModal] = useState(false);
  const [eventDetails, setEventDetails] = useState(false);
  const [startTime, setStartTime] = useState(new Date(1598051730000));
  const [startDate, setStartDate] = useState(new Date(1598051730000));
  const [endTime, setEndTime] = useState(new Date(1598051730000));
  const [endDate, setEndDate] = useState(new Date(1598051730000));
  const [eventStep, setEventStep] = useState(0);
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescritption] = useState("");
  const navigation = useNavigation();

  const beginCreatingEvent = () => {
    setEventDetails(true);
  };

  const handleNavigation = () => {
    if (eventDetails && eventStep === 0) {
      setEventDetails(false);
      return;
    }
    if (eventDetails && eventStep >= 1) {
      setEventStep((step) => step - 1);
      return;
    }
    if (!eventDetails) {
      navigation.goBack();
      return;
    }
  };

  const handleEventStep = () => {
    if (eventStep < 3) setEventStep((step) => step + 1);
  };

  const handleCreateEvent = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={globalStyles.AndroidSafeArea}>
      <View style={styles.createHeader}>
        <Pressable
          onPress={handleNavigation}
          style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="arrowleft" size={34} color="black" />
          {eventDetails && eventStep === 3 && (
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 12 }}>
              Review Event
            </Text>
          )}
        </Pressable>
        <Pressable onPress={handleNavigation}>
          <Text style={styles.headerCancel}>Cancel</Text>
        </Pressable>
      </View>
      <View style={styles.createBody}>
        {!eventDetails && (
          <View style={styles.createOverView}>
            <Text style={styles.title}>Create Event</Text>
            <View style={styles.createOverViewBody}>
              <TouchableOpacity
                style={styles.createOverViewItem}
                onPress={beginCreatingEvent}>
                <Text style={styles.itemTitle}>In Person</Text>
                <Text style={styles.text}>
                  Get together with people at a specific location
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.createOverViewItem}
                onPress={beginCreatingEvent}>
                <Text style={styles.itemTitle}>OnLine</Text>
                <Text style={styles.text}>
                  Video chat wiht Messager Rooms,broadcast with Facebook live or
                  add an external link
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {eventDetails && eventStep === 0 && (
          <View style={eventDetails}>
            <Text style={styles.title}>Event Details</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Event name"
                placeholderTextColor="gray"
                defaultValue={eventName}
                onChangeText={(text) => setEventName(text)}
              />
            </View>
            <Pressable
              style={styles.inputContainer}
              onPress={() => setStartDateModal(true)}>
              <View>
                <Text>Start Date and Time</Text>
                <Text>
                  {moment(startDate).format("ll")} {","}{" "}
                  {moment(startTime).format("h:mm a")}
                </Text>
              </View>
              <View>
                <Feather name="chevron-down" size={34} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={styles.inputContainer}
              onPress={() => setEndDateModal(true)}>
              <View>
                <Text>End Date and Time</Text>
                <Text>
                  {moment(endDate).format("ll")} {","}{" "}
                  {moment(endTime).format("h:mm a")}
                </Text>
              </View>
              <View>
                <Feather name="chevron-down" size={34} color="black" />
              </View>
            </Pressable>
          </View>
        )}
        {eventDetails && eventStep === 1 && (
          <View style={styles.location}>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.subTitle}>
              Add a physical location for people to join your event
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Location"
                onChangeText={(text) => setLocation(text)}
                defaultValue={location}
              />
            </View>
          </View>
        )}
        {eventDetails && eventStep === 2 && (
          <View style={styles.location}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.subTitle}>
              Provide more information about your event so guests know what to
              expect
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Description"
                defaultValue={description}
                onChangeText={(text) => setDescritption(text)}
              />
            </View>
          </View>
        )}
        {eventDetails && eventStep === 3 && (
          <View style={styles.location}>
            <View
              style={{
                backgroundColor: "gray",
                padding: 24,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: Dimensions.get("window").height / 4,
              }}>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  alignItems: "center",
                  backgroundColor: "#1f1e1e",
                  padding: 12,
                  borderRadius: 4,
                }}>
                <MaterialIcons name="add-a-photo" size={24} color="gray" />
                <Text style={{ color: "gray", marginLeft: 6 }}>ADD PHOTO</Text>
              </Pressable>
            </View>

            <View
              style={{
                borderBottomColor: "#e3dcdc",
                borderBottomWidth: 1,
                paddingBottom: 16,
                paddingHorizontal: 8,
                paddingVertical: 6,
              }}>
              <Text style={{ color: "red" }}>
                {moment(startDate).format("ll")} {","}{" "}
                {moment(startTime).format("h:mm a")}
              </Text>

              <Text
                style={[
                  {
                    fontSize: 18,
                    color: "black",
                    marginBottom: 4,
                    fontWeight: "bold",
                  },
                ]}>
                {eventName}
              </Text>
              <Text style={[{ fontSize: 18, color: "gray" }]}>
                Event hosted by . Kevin Caster
              </Text>
            </View>
            <View
              style={{
                paddingBottom: 16,
                paddingHorizontal: 8,
                paddingVertical: 6,
              }}>
              <Text style={{ fontWeight: "bold", marginTop: 4, fontSize: 18 }}>
                Description
              </Text>
              <Text style={{ color: "gray" }}>{description}</Text>
              <Text style={{ fontWeight: "bold", marginTop: 4, fontSize: 18 }}>
                Location
              </Text>
              <Text style={{ color: "gray" }}>{location}</Text>
            </View>
          </View>
        )}
        {eventDetails && (
          <View style={styles.buttonContainer}>
            {eventStep < 3 ? (
              <TouchableOpacity
                onPress={handleEventStep}
                style={[
                  styles.button,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  },
                ]}>
                <Text style={[styles.buttonText]}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handleCreateEvent}
                style={[
                  styles.button,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  },
                ]}>
                <Text style={[styles.buttonText]}>Create Event</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        <EventStartDateModal
          startDateModal={startDateModal}
          setStartDateModal={setStartDateModal}
          startTime={startTime}
          startDate={startDate}
          setStartDate={setStartDate}
          setStartTime={setStartTime}
        />
        <EventEndDateModal
          endDateModal={endDateModal}
          setEndDateModal={setEndDateModal}
          endTime={endTime}
          endDate={endDate}
          setEndDate={setEndDate}
          setEndTime={setEndTime}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  headerCancel: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  createBody: {
    padding: 2,
  },

  createOverViewItem: {
    elevation: 12,
    marginBottom: 8,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },

  itemTitle: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },

  text: {
    color: "gray",
    paddingVertical: 12,
    lineHeight: 18,
  },

  subTitle: {
    color: "gray",
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 0.7,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 4,
    position: "absolute",
    top: 550,
  },

  button: {
    backgroundColor: "#037ffc",
    padding: 14,
    borderRadius: 8,
    elevation: 4,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddScreen;
