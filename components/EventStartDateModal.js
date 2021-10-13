import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons, AntDesign, Entypo, Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const EventStartDateModal = ({
  startDateModal,
  setStartDateModal,
  startTime,
  startDate,
  setStartTime,
  setStartDate,
}) => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (mode === "date") {
      const currentDate = selectedDate || startDate;
      setShow(Platform.OS === "ios");
      setStartDate(currentDate);
    } else {
      const currentTime = selectedDate || startTime;
      setShow(Platform.OS === "ios");
      setStartTime(currentTime);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  const showTimePicker = () => {
    showMode("time");
  };
  return (
    <Modal animationType="slide" transparent={true} visible={startDateModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Pressable
            onPress={() => setStartDateModal(false)}
            style={{ position: "absolute", right: 0, color: "grey" }}>
            <Entypo name="cross" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.modalTitle}>
          <Text style={styles.modalText}>Start Time</Text>
        </View>
        <View style={styles.modalBody}>
          <Pressable style={styles.inputContainer} onPress={showDatePicker}>
            <View>
              <Text>Start Date </Text>
              <Text>{startDate.toUTCString()}</Text>
            </View>
            <View>
              <Feather name="chevron-down" size={34} color="black" />
            </View>
          </Pressable>
          <Pressable style={styles.inputContainer} onPress={showTimePicker}>
            <View>
              <Text>Start Time</Text>
              <Text>{startTime.toUTCString()}</Text>
            </View>
            <View>
              <Feather name="chevron-down" size={34} color="black" />
            </View>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={mode === "date" ? startDate : startTime}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    flex: 1,
    padding: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: Dimensions.get("window").width,
    elevation: 4,
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

  modalTitle: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  modalText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default EventStartDateModal;
