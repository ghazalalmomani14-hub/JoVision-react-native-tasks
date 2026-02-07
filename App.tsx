// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Task30 from './Tasks/Task30';

const App = () => {
  return (
    <View style={styles.container}>
      <Task30 />
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
