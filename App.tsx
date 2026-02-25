import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Task37 from './Tasks/Task37';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Task37 />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});