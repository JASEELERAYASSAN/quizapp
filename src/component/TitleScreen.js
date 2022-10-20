import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const TitleScreen = ({titleText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default TitleScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    color:'#1e8a2e',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});