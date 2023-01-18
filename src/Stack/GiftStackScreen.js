import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Gift} from '../screens';
const GiftStack = createNativeStackNavigator();

const GiftStackScreen = () => {
  return (
    <GiftStack.Navigator screenOptions={{headerShown: false}}>
      <GiftStack.Screen name="Gift" component={Gift} />
    </GiftStack.Navigator>
  );
};

export default GiftStackScreen;
