import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackRoutes } from './app.stack.routes';
import { Tickets } from '../screens/Tickets';
import { Profile } from '../screens/Profile';
import { TabsParamList } from '../@types/navigationTypes';

const { Navigator, Screen } = createBottomTabNavigator<TabsParamList>();

export function AppTabRoutes() {
  return (
    <Navigator
      initialRouteName="AppStackRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="AppStackRoutes" component={AppStackRoutes} />
      <Screen name="Tickets" component={Tickets} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
