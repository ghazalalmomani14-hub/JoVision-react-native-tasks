import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Task33 from './Tasks/Task33';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Task33 />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
