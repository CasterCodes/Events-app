import React from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { styles } from "../screens/HomeScreen";
import { Checkbox } from "react-native-paper";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

const EventResponseModal = ({ modalVisible, setModalVisible }) => {
  const [checked, setChecked] = React.useState(false);
  return (
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
  );
};

export default EventResponseModal;
