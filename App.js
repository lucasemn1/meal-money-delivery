import React from 'react';
import Welcome from './src/screens/Welcome/Welcome';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import FirstUseTutorial from './src/screens/FirstUseTutorial/FirstUseTutorial';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/lightTheme';
import darkTheme from './styles/themes/darkTheme';

const Stack = createStackNavigator();

const App = (teste) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstUseTutorial">
          <Stack.Screen
            name="Welcome"
            component={ Welcome }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={ Login }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={ Register }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ ResetPassword }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FirstUseTutorial"
            component={ FirstUseTutorial }
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
