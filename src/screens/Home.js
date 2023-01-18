import React from 'react';
import {View, Text} from 'react-native';
import {Container, BalanceCard} from '../components/main/StyledComponents';

const Home = () => {
  return (
    <Container>
      <Text
        style={{
          color: '#202020',
          textAlign: 'left',
          width: '88%',
          fontFamily: 'Montserrat-Bold',
          fontSize: 16,
          marginTop: 20,
        }}>
        Hoşgeldin, Hakan
      </Text>
      <BalanceCard>
        <Text
          style={{
            color: '#F0FFFF',
            fontFamily: 'Montserrat-Bold',
            fontSize: 14,
            paddingLeft: 20,
            paddingTop: 20,
          }}>
          Bakiyem
        </Text>
        <Text
          style={{
            color: '#F0FFFF',
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            paddingTop: 4,
            paddingLeft: 20,
          }}>
          446,80 ₺
        </Text>
      </BalanceCard>
    </Container>
  );
};

export default Home;
