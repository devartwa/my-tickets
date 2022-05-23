import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackRoutes } from './app.stack.routes';
import { Tickets } from '../screens/Tickets';
import { Profile } from '../screens/Profile';
import { TabsParamList } from '../@types/navigationTypes';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

const { Navigator, Screen } = createBottomTabNavigator<TabsParamList>();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="AppStackRoutes"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: {
          position: 'absolute',
          bottom: 30,
          right: 20,
          left: 20,
          elevation: 5,
          borderRadius: 15,
          height: 78,
          backgroundColor: theme.colors.white,
          shadowColor: theme.colors.black,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
      }}
    >
      <Screen
        name="AppStackRoutes"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
