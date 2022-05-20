import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { AuthParamList } from '../@types/navigationTypes';

const { Navigator, Screen } = createStackNavigator<AuthParamList>();

export function AuthRoutes() {
  // const handleBackButton = () => {
  //   navigation.goBack();
  //   return true;
  // };

  // useFocusEffect(() => {
  //   const subscription = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     handleBackButton
  //   );
  //   return () => subscription.remove();
  // });

  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
