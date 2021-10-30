import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

const AppStack = createStackNavigator();

const App = (props) => {
  return (
    // set up in case we want more screens, can also add tab navigation
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default (App);
