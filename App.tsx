// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Task27 from './Tasks/Task27';

const App = () => {
  return (
    <View style={styles.container}>
      <Task27 />
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
