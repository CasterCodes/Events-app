import React from "react";
import { LoginScreen, SignupScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Signup" component={SignupScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
