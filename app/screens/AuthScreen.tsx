// AuthScreen.tsx

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { useAuth } from "@/app/firebase/providers/AuthProvider";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ThemedView from "@/app/components/ThemedView";
import ThemedText from "@/app/components/ThemedText";
import ThemedTextInput from "@/app/components/ThemedTextInput";
import ThemedButton from "@/app/components/ThemedButton";

type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
};

const AuthScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { user, setUser, lastAttemptedRoute, setLastAttemptedRoute } =
    useAuth();
  const auth = getAuth();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAuth = async () => {
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // Update profile with first and last name
        if (userCredential.user) {
          await updateProfile(userCredential.user, {
            displayName: `${firstName} ${lastName}`,
          });
        }
      }
      setUser(userCredential.user);
      console.log("User authenticated successfully");
    } catch (error: any) {
      if (error.name === "FirebaseError") {
        switch (error.code) {
          case "auth/email-already-in-use":
            console.log("Email already in use");
            break;
          case "auth/invalid-email":
            console.log("Invalid email");
            break;
          case "auth/weak-password":
            console.log("Weak password");
            break;
          case "auth/invalid-credential":
            console.log("Invalid credential");
            break;
          default:
            console.log("Error message:", error.message);
            console.log("Error name:", error.name);
            console.log("Error stack:", error.stack);
            for (const key in error) {
              if (error.hasOwnProperty(key)) {
                console.log(`${key}: ${error[key]}`);
              }
            }
            const propertyNames = Object.getOwnPropertyNames(error);
            propertyNames.forEach((propertyName) => {
              console.log(`${propertyName}: ${error[propertyName]}`);
            });
            break;
        }
      }
    }
  };

  useEffect(() => {
    const currentRouteName =
      navigation.getState().routes[navigation.getState().routes.length - 1]
        .name;

    if (user && lastAttemptedRoute && currentRouteName !== lastAttemptedRoute) {
      navigation.navigate(lastAttemptedRoute as keyof RootStackParamList);
      setLastAttemptedRoute(null);
    } else if (!user) {
      navigation.navigate("Home");
    }
  }, [user, lastAttemptedRoute, navigation]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>
        {isLogin ? "Sign In" : "Sign Up"}
      </ThemedText>
      {!isLogin && (
        <>
          <ThemedTextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <ThemedTextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
        </>
      )}
      <ThemedTextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <ThemedTextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <ThemedButton
        title={isLogin ? "Login" : "Register"}
        onPress={handleAuth}
      />
      <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Sign In"}
      </Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: "80%",
    borderRadius: 4,
  },
  toggleText: {
    marginTop: 20,
    color: "#3498db",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
    color: "#fff",
  },
});

export default AuthScreen;
