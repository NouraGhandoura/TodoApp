import React from "react";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import HomeIcon from "../icons/homeIcon";
import Favorite from "../screens/favorite";
import FavoriteIcon from "../icons/favoriteIcon";
enableScreens();
const Tab = createBottomTabNavigator();

export default function BottoomTabs() {
  return (
    <Tab.Navigator
      detachInactiveScreens
      screenOptions={{
        tabBarActiveTintColor: "#F18B8B",
        tabBarInactiveTintColor: "#C6C6C6",
        tabBarStyle: {
          height: 80,
          paddingVertical: 5,
          paddingBottom: 10,
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home"!,
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? "#F18B8B" : "#C6C6C6"} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favorite"!,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FavoriteIcon color={focused ? "#F18B8B" : "#C6C6C6"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
