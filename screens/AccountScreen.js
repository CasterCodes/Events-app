import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  Dimensions,
  TextInput,
} from "react-native";
import { Ionicons, AntDesign, Entypo, Feather } from "@expo/vector-icons";

import globalStyles from "../styles/globalStyles";

const AccountScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textFocused, setTextFocused] = useState(false);

  const handleFocus = () => setTextFocused(true);
  const handleBlur = () => setTextFocused(false);
  return (
    <View style={globalStyles.AndroidSafeArea}>
      <View style={styles.profileContainer}>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileImage}>
            <Image
              style={styles.profileImage}
              source={{ uri: "https://randomuser.me/api/portraits/men/10.jpg" }}
            />
            <View style={styles.iconContainer}>
              <Ionicons
                name="add"
                size={26}
                color="white"
                style={{ fontWeight: "bold" }}
              />
            </View>
          </View>
          <Text style={styles.profileText}>Kevin Caster</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.button]}>
              <Text style={styles.buttonText}>12 Events Created</Text>
            </Pressable>
            <Pressable
              style={[
                styles.button,
                { marginLeft: 5, backgroundColor: "#1a4891" },
              ]}>
              <Text style={styles.buttonText}>4 Events Attended</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemText}>Kevin Caster</Text>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemText}>castercodes@gmail.com</Text>
        </View>

        <View style={styles.profileItem}>
          <Text style={styles.profileItemText}>0720843306</Text>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemText}>Nairobi, Kenya</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.button,
              {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              },
            ]}>
            <AntDesign name="logout" size={16} color="white" />
            <Text style={[styles.buttonText, { marginLeft: 12 }]}>Logout</Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              {
                marginLeft: 5,
                backgroundColor: "#1a4891",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              },
            ]}>
            <AntDesign name="profile" size={16} color="white" />
            <Text
              style={[styles.buttonText, { marginLeft: 12 }]}
              onPress={() => setModalVisible(true)}>
              Edit Profile
            </Text>
          </Pressable>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalConatiner}>
          <View style={styles.modalHeader}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Feather name="chevron-down" size={34} color="black" />
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
              <Entypo name="cross" size={34} color="black" />
            </Pressable>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalBodyTitle}>Edit Profile</Text>
            <View style={styles.modalTextInputContainer}>
              <View
                style={[
                  styles.textInputContainer,
                  textFocused && { borderColor: "blue" },
                ]}>
                <TextInput
                  placeholder="Your name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
              <View
                style={[
                  styles.textInputContainer,
                  textFocused && { borderColor: "blue" },
                ]}>
                <TextInput
                  placeholder="Email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
              <View
                style={[
                  styles.textInputContainer,
                  textFocused && { borderColor: "blue" },
                ]}>
                <TextInput
                  placeholder="Phone Number"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
              <View
                style={[
                  styles.textInputContainer,
                  textFocused && { borderColor: "blue" },
                ]}>
                <TextInput
                  placeholder="Location"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[
                  styles.button,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  },
                ]}>
                <Text style={[styles.buttonText]}>Update Profile</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  profileHeaderContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  profileText: {
    fontSize: 25,
    marginTop: 8,
    fontWeight: "bold",
    color: "#037ffc",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
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
  iconContainer: {
    backgroundColor: "#037ffc",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    right: -10,
    bottom: -10,
  },

  profileDetails: {
    padding: 16,
  },

  profileItem: {
    padding: 18,
    backgroundColor: "#fff",
    marginBottom: 7,
    elevation: 4,
    borderRadius: 8,
  },

  profileItemText: {
    color: "#037ffc",
    fontWeight: "bold",
    fontSize: 16,
  },

  modalConatiner: {
    backgroundColor: "white",
    flex: 1,
    padding: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: Dimensions.get("window").width / 18,
    elevation: 4,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  modalBody: {
    paddingHorizontal: 4,
  },
  modalBodyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  modalTextInputContainer: {
    marginTop: 24,
  },
  textInputContainer: {
    padding: 12,
    borderColor: "gray",
    borderWidth: 1 / 2,
    marginBottom: 16,
    borderRadius: 4,
  },
});
export default AccountScreen;
