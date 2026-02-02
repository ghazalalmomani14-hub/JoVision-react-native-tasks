import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyFunctionPage from './Tasks/Task22';

export default function App() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(''); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Typed Text: {text}</Text>

      <Button
        title="Show"
        onPress={() => setShow(!show)}
      />

      {show && (
        <MyFunctionPage updateText={setText} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
