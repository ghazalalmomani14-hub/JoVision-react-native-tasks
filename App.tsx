import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Task32 from './Tasks/Task32';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Task32 />
    </SafeAreaView>
  );
}

export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
