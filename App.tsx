// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Task26 from './Tasks/Task26';

const App = () => {
  return (
    <View style={styles.container}>
      <Task26 />
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
