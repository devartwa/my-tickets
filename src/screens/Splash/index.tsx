import React from 'react';

import { Animation, Container } from './styles';
import { StatusBar } from 'react-native';

export function Splash() {
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
