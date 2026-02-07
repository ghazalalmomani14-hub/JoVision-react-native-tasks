// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Task28 from './Tasks/Task28';

const App = () => {
  return (
    <View style={styles.container}>
      <Task28 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
