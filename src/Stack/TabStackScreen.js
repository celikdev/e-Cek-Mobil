import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import GiftStackScreen from './GiftStackScreen';
import PayStackScreen from './PayStackScreen';

import {Home} from '../screens';
//Icons for TabBar
import {
  HomeIcon,
  HomeFilledIcon,
  PayIcon,
  PayFilledIcon,
  GiftIcon,
  GiftFilledIcon,
} from '../assets/Icons/Icons';

const Tab = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 60,
          right: 60,
          elevation: 0,
          borderRadius: 15,
          height: 56,
          backgroundColor: '#202020',
          borderTopWidth: 0,
          justifyContent: 'center',
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          paddingBottom: 4,
          color: '#CCFF00',
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Montserrat-SemiBold',
        },
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <HomeFilledIcon width="26" height="26" />
            ) : (
              <HomeIcon width="26" height="26" />
            );
          } else if (route.name === 'PayStack') {
            return focused ? (
              <PayFilledIcon width="26" height="26" />
            ) : (
              <PayIcon width="26" height="26" />
            );
          } else if (route.name === 'GiftStack') {
            return focused ? (
              <GiftFilledIcon width="26" height="26" />
            ) : (
              <GiftIcon width="26" height="26" />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Anasayfa',
        }}
        component={Home}
      />
      <Tab.Screen
        name="PayStack"
        options={{
          tabBarLabel: 'Öde',
        }}
        component={PayStackScreen}
      />
      <Tab.Screen
        name="GiftStack"
        options={{
          tabBarLabel: 'Çeklerim',
        }}
        component={GiftStackScreen}
      />
    </Tab.Navigator>
  );
};

export default TabStackScreen;
