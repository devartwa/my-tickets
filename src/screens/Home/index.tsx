import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { TabsParamList } from '../../@types/navigationTypes';
import { IUser } from '../../redux/models/userModel';
import { setUser } from '../../redux/reducers/userReducer';

import { Container, Title } from './styles';

type HomeNavigationProp = StackNavigationProp<TabsParamList, 'AppStackRoutes'>;
type HomeProps = { navigation: HomeNavigationProp };

export function Home({ navigation }: HomeProps) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser({} as IUser));
    navigation.navigate('AuthStackRoutes', { screen: 'SignIn' });
  };

  return (
    <Container>
      <Title>Home</Title>
      <Button title="Logout" onPress={handleLogout} />
    </Container>
  );
}
