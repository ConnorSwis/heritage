import {
  NavigationProp,
  useNavigation as _useNavigation,
} from "@react-navigation/native";

export type NavigationNames = {
  Auth: unknown;
  Home: unknown;
  Profile: unknown;
};

export const useNavigation = () => {
  return _useNavigation<NavigationProp<NavigationNames>>();
};
