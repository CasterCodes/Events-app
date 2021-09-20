import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen, AddScreen, SearchScreen, AccountScreen } from "../screens";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarColor: "#101394",
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color="white" />;
          },
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "",
          tabBarColor: "#101394",
          tabBarIcon: () => {
            return <AntDesign name="search1" size={24} color="white" />;
          },
        }}
      />
      <Tabs.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: "",
          tabBarColor: "#101394",
          tabBarIcon: () => {
            return <AntDesign name="pluscircle" size={24} color="white" />;
          },
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "",
          tabBarColor: "#101394",
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color="white"
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;