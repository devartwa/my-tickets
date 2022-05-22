import { NavigatorScreenParams } from '@react-navigation/native';
import { Events } from './eventTypes';

export type RootNavigationParams = {
  Root: NavigatorScreenParams<TabsParamList>;
};

export type TabsParamList = {
  AuthStackRoutes: NavigatorScreenParams<AuthParamList>;
  Home: NavigatorScreenParams<AppParamList>;
  Tickets: undefined;
  Profile: undefined;
};

export type AppParamList = {
  AppStackRoutes: undefined;
  EventDetail: {
    event: Events;
  };
};

export type AuthParamList = {
  Splash: undefined;
  SignIn: undefined;
};
