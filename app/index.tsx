import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider } from "@/app/firebase/providers/AuthProvider";
import ProtectedRoute from "@/app/firebase/providers/ProtectedRoute";
import AuthScreen from "@/app/screens/AuthScreen";
import HomeScreen from "@/app/screens/HomeScreen";
import ProfileScreen from "@/app/screens/ProfileScreen";
import { StatusBar } from "react-native";

const ProtectedHomeScreen = () => (
  <ProtectedRoute routeName="Home">
    <HomeScreen />
  </ProtectedRoute>
);

const ProtectedProfileScreen = () => (
  <ProtectedRoute routeName="Profile">
    <ProfileScreen />
  </ProtectedRoute>
);

type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthProvider>
      <StatusBar hidden />
      <NavigationContainer independent>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={ProtectedHomeScreen} />
          <Stack.Screen name="Profile" component={ProtectedProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
