import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = ({ route }: { route: HomeScreenRouteProp }) => {
  const { nome, email } = route.params;
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.body}>
      <View style={styles.buttonProfile}>
        <Button onPress={() => navigation.navigate('Perfil', { nome, email })}>
          <Image source={require('../../assets/meuperfil.png')} style={styles.meuPerfil}/>
        </Button>
      </View>
      <Text style={styles.label}>Perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    backgroundColor: "rgb(231, 231, 231)",
    height: '100%',
  },
  label:{
    color: "rgb(245, 245, 245)",
    fontSize: 16,
    position: 'absolute',
    top: '9%',
    left: '5%',
  },
  meuPerfil:{
    width: 50,
    height: 50,
    marginLeft: '5%',
  },
  buttonProfile: {
    backgroundColor: "rgb(158, 158, 158)",
    borderRadius: 10,
    height: 100,
    width: '20%',
  },
});

export default Home;
