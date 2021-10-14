import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#037ffc" animated={true} />
      <ImageBackground
        source={require("../assets/bgImage.png")}
        style={styles.imgBackground}>
        <LinearGradient
          colors={["#0356fc", "#09203f"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.formContainer}>
            <View style={styles.formItem}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="youremail@gmail.com"
                  style={styles.input}
                  placeholderTextColor="white"
                />
              </View>
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  style={styles.input}
                  secureTextEntry={true}
                  placeholderTextColor="white"
                />
              </View>
            </View>
            <View style={styles.formItem}>
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
                <Text style={[styles.buttonText]}>Login</Text>
              </Pressable>
            </View>
            <View style={styles.formItem}>
              <View>
                <Text
                  style={{ color: "white", marginBottom: 12, fontSize: 16 }}>
                  You don't have an account ?{" "}
                </Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                  <Text
                    style={{
                      color: "#037ffc",
                      fontSize: 17,
                      fontWeight: "bold",
                    }}>
                    Create Account
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.95,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  label: {
    color: "#6192f2",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  formItem: {
    marginVertical: 12,
  },
  inputContainer: {
    backgroundColor: "#6192f2",
    padding: 7,
    borderRadius: 4,
  },
  input: {
    paddingVertical: 6,
    fontSize: 14,
    color: "white",
  },
  button: {
    backgroundColor: "#037ffc",
    padding: 18,
    borderRadius: 4,
    elevation: 4,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
