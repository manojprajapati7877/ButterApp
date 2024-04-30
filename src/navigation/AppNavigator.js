import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingScreen from "../screens/SettingScreen";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeIcon = () => <Feather name="home" size={24} color="black" />;
const SettingIcon = () => (
  <Ionicons name="settings-outline" size={24} color="black" />
);
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            return <HomeIcon />;
          } else if (route.name === "Setting") {
            iconName = focused ? "settings" : "settings-outline";
            return <SettingIcon />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
