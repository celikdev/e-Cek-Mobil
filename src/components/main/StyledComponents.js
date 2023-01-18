import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Container = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F0FFFF',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};

export const BalanceCard = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: '#202020',
        width: '90%',
        height: 150,
        borderRadius: 20,
        marginVertical: 10,
        justifyContent: 'space-between',
      }}>
      <View>{children}</View>
      <View style={{width: '100%', alignItems: 'center', marginBottom: 12}}>
        <TouchableOpacity
          style={{
            width: '90%',
            borderWidth: 2,
            borderRadius: 4,
            paddingVertical: 10,
            borderColor: '#CCFF00',
          }}>
          <Text
            style={{
              width: '100%',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 12,
              textAlign: 'center',
              color: '#CCFF00',
            }}>
            Hesap Özetini Görüntüle
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
