import React, { createContext, useState, useContext, Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const SharedTextContext = createContext({
  text: '',
  setText: value => {},
});

export const SharedTextProvider = ({ children }) => {
  const [text, setText] = useState('');
  return (
    <SharedTextContext.Provider value={{ text, setText }}>
      {children}
    </SharedTextContext.Provider>
  );
};

export class ComponentOne extends Component {
  static contextType = SharedTextContext;
  render() {
    const { text } = this.context;
    return <Text style={styles.text}>{text}</Text>;
  }
}

export const ComponentTwo = () => {
  const { text, setText } = useContext(SharedTextContext);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
      <ComponentOne />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  text: { fontSize: 18, color: 'blue' },
});
