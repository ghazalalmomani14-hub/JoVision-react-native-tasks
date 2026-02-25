import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { SharedTextProvider, ComponentTwo } from './Tasks/Task38';
const App = () => {
  return (
    <SharedTextProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <ComponentTwo />
          <ComponentTwo />
          <ComponentTwo />
          <ComponentTwo />
        </ScrollView>
      </SafeAreaView>
    </SharedTextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20 },
});