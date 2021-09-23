import React from "react";
import { HomeScreen, EventDetails } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Event = createNativeStackNavigator();

const EventStack = () => {
  return (
    <Event.Navigator
      initialRouteName="Events"
      screenOptions={{ headerShown: false }}>
      <Event.Screen name="Events" component={HomeScreen} />
      <Event.Screen name="EventDetails" component={EventDetails} />
    </Event.Navigator>
  );
};

export default EventStack;
