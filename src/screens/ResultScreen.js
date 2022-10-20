import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import TitleScreen from '../component/TitleScreen';

const ResultScreen = ({ navigation, route }) => {
  const { score } = route.params

  const resultBanner = score >= 40 ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.png')}
        style={styles.backgroundImage}>
        <TitleScreen titleText='YOUR SCORE' />
        <Text style={styles.scoreValue}>{score}</Text>
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: resultBanner,
            }}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.button}>
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};



export default ResultScreen;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
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
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center'
  }
});