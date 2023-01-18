import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';

const Gift = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Barcode
        format="EAN13"
        value="5901234123457"
        text="5901234123457"
        style={{color: 'black'}}
        maxWidth={Dimensions.get('window').width / 1.5}
      />
    </View>
  );
};

export default Gift;
