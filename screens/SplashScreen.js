import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
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
          <Text style={styles.text}>EventList</Text>
          <View style={{ position: "absolute", bottom: 100 }}>
            <ActivityIndicator size="large" color="#037ffc" />
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
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default SplashScreen;
