import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from './src/navigation/app-navigator';

LogBox.ignoreAllLogs(); // Ignore log notifications

const App = (props) => {
  return (
    <AppNavigator />
  );
};

export default App;
