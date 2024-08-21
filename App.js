/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './src/screens/LogInScreen';
import LogInOTPScreen1 from './src/screens/LogInOTPScreen1';
import LogInOTPScreen2 from './src/screens/LogInOTPScreen2';

//const Stack = createNativeStackNavigator();

function App() {
  return (
    /*<NavigationContainer>
      <Stack.Navigator screenOptions= {{ headerShown: false }}>
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="LogInOTPScreen1" component={LogInOTPScreen1} />
        <Stack.Screen name="LogInOTPScreen2" component={LogInOTPScreen2} />
      </Stack.Navigator>
    </NavigationContainer>*/
    <LogInOTPScreen2/>
);
}

export default App;
