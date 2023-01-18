import React from 'react';
import {StatusBar, Pressable, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Logo from './src/assets/Logo.png';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {TabStackScreen} from './src/Stack/';
import {Account} from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#202020" barStyle="light-content" />
      <Stack.Navigator
        screenOptions={({navigation, route}) => ({
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: '#202020',
            shadowColor: '#000',
            elevation: 6,
          },
          headerTitle: () => (
            <Image source={Logo} style={{width: 36, height: 36}} />
          ),
          headerTitleAlign: 'center',
          headerLeft: () =>
            route.name === 'Account' ? (
              <Pressable style={{backgroundColor: 'red'}}>
                <Text style={{color: '#CCFF00'}}>Geri</Text>
              </Pressable>
            ) : null,
          headerRight: ({}) => (
            <Pressable
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#CCFF00',
                marginRight: 20,
              })}
              onPress={() => navigation.navigate('Account')}
            />
          ),
        })}>
        <Stack.Screen name="TabStack" component={TabStackScreen} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
