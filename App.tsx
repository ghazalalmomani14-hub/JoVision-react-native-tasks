import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import MyFunctionPage from './Tasks/Task24';

function App() {
  const childRef = useRef<any>(null); 
  const [text, setText] = useState('');

  function isValidInput(value: string) {
    return value.trim().length > 0;
  }

  function showError(message: string) {
    Alert.alert('Error', message);
  }

  function updateChildText(value: string) {
    if (childRef.current && childRef.current.updateText) {
      childRef.current.updateText(value);
    }
  }

  function handleTextChange(value: string) {
    try {
      setText(value);

      if (!isValidInput(value)) {
        showError('Text cannot be empty');
        return;
      }

      updateChildText(value);
    } catch (error) {
      console.log(error);
      showError('Unexpected error');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Type here"
      />

      <MyFunctionPage ref={childRef} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
