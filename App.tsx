/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Task36 from './Tasks/Task36';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Task36 />
    </SafeAreaView>
  );
}

export default App;