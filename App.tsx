// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Task29 from './Tasks/Task29';

const App = () => {
  return (
    <View style={styles.container}>
      <Task29 />
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
