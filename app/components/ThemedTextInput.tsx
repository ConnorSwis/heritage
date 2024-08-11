import { useThemeColor } from "@/app/hooks/useThemeColor";
import { TextInput, TextInputProps } from "react-native";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return (
    <TextInput
      style={[{ color: textColor, borderColor: textColor }, style]}
      placeholderTextColor={textColor}
      {...otherProps}
    />
  );
}

export default ThemedTextInput;
