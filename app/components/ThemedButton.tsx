import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useThemeColor } from "@/app/hooks/useThemeColor";

// Define the type for your button props
export interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  lightButtonColor?: string;
  darkButtonColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  onPress,
  lightButtonColor,
  darkButtonColor,
  lightTextColor,
  darkTextColor,
  buttonStyle,
  textStyle,
}) => {
  // Use theme colors for button background and text
  const buttonBackgroundColor = useThemeColor(
    { light: lightButtonColor, dark: darkButtonColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    "text"
  );

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: buttonBackgroundColor },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ThemedButton;
