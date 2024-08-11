import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "@/app/firebase/providers/AuthProvider";
import { getAuth, signOut } from "@firebase/auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ThemedText } from "@/app/components/ThemedText";
import { ThemedView } from "@/app/components/ThemedView";
import ThemedButton from "@/app/components/ThemedButton";

type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
};

const HomeScreen: React.FC = () => {
  const { user } = useAuth();
  const auth = getAuth();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Welcome, {user?.email}!</ThemedText>
      <ThemedButton
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
        lightButtonColor="#2196F3"
        darkButtonColor="#1E88E5"
        lightTextColor="#FFFFFF"
        darkTextColor="#E0E0E0"
      />
      <ThemedButton
        title="Logout"
        onPress={handleLogout}
        lightButtonColor="transparent"
        darkButtonColor="transparent"
        lightTextColor="#FFFFFF"
        darkTextColor="#E0E0E0"
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;
