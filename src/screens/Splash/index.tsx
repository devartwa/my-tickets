import React, { useEffect } from 'react';

import { Animation, Container } from './styles';
import { StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../../@types/navigationTypes';

type SplashNavigationProp = StackNavigationProp<AuthParamList, 'Splash'>;
type SplashProps = { navigation: SplashNavigationProp };

export function Splash({ navigation }: SplashProps) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 5000);
  });

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Animation
        source={require('../../assets/animations/tickets.json')}
        loop
        autoPlay
      />
    </Container>
  );
}
