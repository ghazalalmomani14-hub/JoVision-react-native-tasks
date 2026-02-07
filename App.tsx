import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Task25 from './Tasks/Task25';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Task25 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
