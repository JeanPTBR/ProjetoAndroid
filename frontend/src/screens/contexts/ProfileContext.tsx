// contexts/ProfileContext.tsx
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ProfileContextType = {
  nome: string;
  email: string;
  setNome: (nome: string) => void;
  setEmail: (email: string) => void;
};

export const ProfileContext = createContext<ProfileContextType>({
  nome: "",
  email: "",
  setNome: () => {},
  setEmail: () => {},
});

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      const savedNome = await AsyncStorage.getItem("nome");
      const savedEmail = await AsyncStorage.getItem("email");
      if (savedNome) setNome(savedNome);
      if (savedEmail) setEmail(savedEmail);
    };
    loadProfile();
  }, []);

  useEffect(() => {
    const saveProfile = async () => {
      await AsyncStorage.setItem("nome", nome);
      await AsyncStorage.setItem("email", email);
    };
    saveProfile();
  }, [nome, email]);

  return (
    <ProfileContext.Provider value={{ nome, email, setNome, setEmail }}>
      {children}
    </ProfileContext.Provider>
  );
};