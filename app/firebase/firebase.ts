import { config } from "@/constants/config";
import { initializeApp } from "@firebase/app";
import { initializeAuth, getReactNativePersistence } from "@firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const { firebaseConfig } = config;

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
