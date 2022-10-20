import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import TitleScreen from '../component/TitleScreen';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.png')}
            style= {styles.backgroundImage}>
      <TitleScreen titleText='Computer Quiz' />
      <View style={styles.bannerContainer}>
      <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/online-test-5727897-4788138.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        /> 
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('QuizScreen')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container : {
    height: '100%',
    width: '100%',
  },
  button: {
    width: '90%',
    backgroundColor: '#a820e3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});