import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { EventDetail } from '../screens/EventDetail';
import { AppParamList } from '../@types/navigationTypes';

const { Navigator, Screen } = createStackNavigator<AppParamList>();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="EventDetail" component={EventDetail} />
    </Navigator>
  );
}
