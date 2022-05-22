import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { EventDetail } from '../screens/EventDetail';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="AppStackRoutes"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Screen name="AppStackRoutes" component={Home} />
      <Screen name="EventDetail" component={EventDetail} />
    </Navigator>
  );
}
