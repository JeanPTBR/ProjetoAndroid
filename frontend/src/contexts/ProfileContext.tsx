import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ProfileContextType = {
  id: string;
  nome: string;
  email: string;
  imagemPerfil: string | null;
  setId: (id: string) => void; 
  setNome: (nome: string) => void;
  setEmail: (email: string) => void;
  setImagemPerfil: (uri: string | null) => void;
};

export const ProfileContext = createContext<ProfileContextType>({
  id: "",
  nome: "",
  email: "",
  imagemPerfil: "",
  setId: () => {},
  setNome: () => { },
  setEmail: () => { },
  setImagemPerfil: () => { },
});

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [imagemPerfil, setImagemPerfil] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedId = await AsyncStorage.getItem("id");
        const savedNome = await AsyncStorage.getItem("nome");
        const savedEmail = await AsyncStorage.getItem("email");

        if (savedId) setId(savedId);
        if (savedNome) setNome(savedNome);
        if (savedEmail) setEmail(savedEmail);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    };
    loadProfile();
  }, []);

  useEffect(() => {
    const saveProfile = async () => {
      try {
        await AsyncStorage.setItem("id", id);
        await AsyncStorage.setItem("nome", nome);
        await AsyncStorage.setItem("email", email);
      } catch (error) {
        console.error("Erro ao salvar perfil:", error);
      }
    };
    saveProfile();
  }, [id, nome, email]);

  return (
    <ProfileContext.Provider value={{ id ,nome, email, setId, setNome, setEmail, imagemPerfil, setImagemPerfil }}>
      {children}
    </ProfileContext.Provider>
  );
};