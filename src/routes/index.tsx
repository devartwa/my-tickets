import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppTabRoutes } from './app.tab.routes';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux';

export function Routes() {
  const { user } = useSelector((state: ApplicationState) => state.userReducer);

  return (
    <NavigationContainer>
      {user.email ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
