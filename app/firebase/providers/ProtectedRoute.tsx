import React, { useEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useAuth } from "@/app/firebase/providers/AuthProvider";
import AuthScreen from "@/app/screens/AuthScreen";

interface ProtectedRouteProps {
  children: React.ReactNode;
  routeName: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  routeName,
}) => {
  const { user, setLastAttemptedRoute } = useAuth();
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    if (!user) {
      setLastAttemptedRoute(routeName);
      navigation.navigate("Auth");
    }
  }, [user, navigation, setLastAttemptedRoute, routeName]);

  if (!user) {
    return <AuthScreen />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
