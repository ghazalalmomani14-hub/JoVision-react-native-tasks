// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Task31 from './Tasks/Task31';

const App = () => {
  return (
    <View style={styles.container}>
      <Task31 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
});

export default App;
