import { NavigatorScreenParams } from '@react-navigation/native';

export type RootNavigationParams = {
  Root: NavigatorScreenParams<TabsParamList>;
};

export type TabsParamList = {
  AppStackRoutes: NavigatorScreenParams<AppParamList>;
  AuthStackRoutes: NavigatorScreenParams<AuthParamList>;
  Tickets: undefined;
  Profile: undefined;
};

export type AppParamList = {
  Home: undefined;
};

export type AuthParamList = {
  Splash: undefined;
  SignIn: undefined;
};
