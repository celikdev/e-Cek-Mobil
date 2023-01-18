import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../components/main/StyledComponents';

const Account = () => {
  return (
    <Container>
      <Text
        style={{
          color: '#202020',
          textAlign: 'center',
          marginVertical: 10,
          fontFamily: 'Montserrat-Bold',
        }}>
        Hesap
      </Text>
    </Container>
  );
};

export default Account;
