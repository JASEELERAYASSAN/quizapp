import React from 'react';
import {createNativeStackNavigator}from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import QuizScreen from '../screens/QuizScreen'
import Resultscreen from '../screens/ResultScreen'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultScreen"
        component={Resultscreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;