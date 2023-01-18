import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pay} from '../screens';

const PayStack = createNativeStackNavigator();

const PayStackScreen = () => {
  return (
    <PayStack.Navigator screenOptions={{headerShown: false}}>
      <PayStack.Screen name="Pay" component={Pay} />
    </PayStack.Navigator>
  );
};

export default PayStackScreen;
