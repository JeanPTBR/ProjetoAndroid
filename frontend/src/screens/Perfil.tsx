import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView , Alert } from "react-native";
import { TextInput } from 'react-native-paper';
import { Button } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { ProfileContext } from "./contexts/ProfileContext";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Perfil">;

const Perfil = ({ route }: { route: ProfileScreenRouteProp }) => {
  //const { nome: initialNome, email: initialEmail } = route.params;
  const { nome, email, setNome, setEmail } = useContext(ProfileContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    if (nome && email) {
      setIsEditing(false);
      Alert.alert('Sucesso', 'Nome e email salvos com sucesso ✔');
    } else {
      Alert.alert('Erro', 'Nome e email não puderam ser salvos.');
    }
  };

  const handleCancelPress = () => {
    //setNome(initialNome);
    //setEmail(initialEmail);
    setIsEditing(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image source={require("../../assets/perfil.png")} style={styles.image} />
        <Text style={styles.title}>Perfil do usuário</Text>

        {isEditing ? (
          <>
            <TextInput
              label="Nome"
              style={[styles.text, styles.input]}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
            />
            <TextInput
              label="Email"
              style={[styles.text, styles.input]}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              keyboardType="email-address"
            />
          </>
        ) : (
          <>
            <Text style={styles.text}>Nome: {nome}</Text>
            <View style={styles.separator} />
            <Text style={styles.text}>Email: {email}</Text>
            <View style={styles.separator} />
          </>
        )}

        {isEditing ? (
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleSavePress}
              style={styles.saveButton}>
                <Text style={styles.textSaveButton}>
                  Salvar
                </Text>
            </Button>
            <Button
              mode="outlined"
              onPress={handleCancelPress}
              style={styles.cancelButton}>
                <Text style={styles.textCancelButton}>
                  Cancelar
                </Text>
            </Button>
          </View>
        ) : (
          <Button
            mode="contained"
            onPress={handleEditPress}
            style={styles.button}>
            <Text style={styles.textbutton}>
              Editar
            </Text>
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "rgba(194, 194, 194, 0.904)",
  },
  container: {
    width: "87%",
    height: 480,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    position: 'absolute',
    top: '9%',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "rgb(0, 0, 0)",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    color: "rgb(0, 0, 0)",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(228, 228, 228, 0.959)",
    color: "rgb(0, 0, 0)",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  separator: {
    width: "100%",
    height: 1,
    marginTop: 5,
    backgroundColor: "black",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "rgb(39, 177, 241)",
    width: "70%",
    height: 40,
    borderRadius: 10,
    marginTop: 5,
  },
  textbutton:{
    fontSize: 17,
    color: "rgb(255, 255, 255)",
  },
  saveButton: {
    width: "50%",
    backgroundColor: "rgba(49, 109, 223, 0.863)",
    borderRadius: 10,
  },
  cancelButton: {
    width: "50%",
    backgroundColor: "rgba(226, 61, 61, 0.911)",
    marginLeft: 10,
    borderRadius: 10,
  },
  textSaveButton:{
    fontSize: 17,
    color: "rgb(255, 255, 255)",
  },
  textCancelButton:{
    fontSize: 17,
    color: "rgb(255, 255, 255)",
  },
});

export default Perfil;