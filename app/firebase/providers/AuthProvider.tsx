// AuthProvider.tsx

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  initializeAuth,
  onAuthStateChanged,
  User,
  getReactNativePersistence,
} from "@firebase/auth";
import { auth } from "@/app/firebase/firebase";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  lastAttemptedRoute: string | null;
  setLastAttemptedRoute: (route: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [lastAttemptedRoute, setLastAttemptedRoute] = useState<string | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, lastAttemptedRoute, setLastAttemptedRoute }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
