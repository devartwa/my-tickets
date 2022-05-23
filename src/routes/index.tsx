import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NestedRoutes } from './nested.routes';
import { RootNavigationParams } from '../@types/navigationTypes';

const { Navigator, Screen } = createStackNavigator<RootNavigationParams>();

function NavigationRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Root" component={NestedRoutes} />
    </Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
}
