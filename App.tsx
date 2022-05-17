import React from 'react';
import { Text, View } from 'react-native';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontFamily: theme.fonts.bold }}>App.tsx</Text>
    </View>
  );
}
