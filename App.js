import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "./screens";
import { BottomTabs } from "./tabs";
import { AuthStack } from "./stacks";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    hideSplashScreen();
  }, [loading, user]);

  const hideSplashScreen = () =>
    setTimeout(() => {
      setLoading(false);
    }, 500);

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {!loading && !user && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
      )}
      {!loading && user && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={BottomTabs} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
