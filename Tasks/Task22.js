import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function MyFunctionPage({ updateText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={(value) => updateText(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
});
