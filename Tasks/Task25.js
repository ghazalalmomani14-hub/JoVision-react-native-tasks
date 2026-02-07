import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

export default class Task25 extends Component {
  constructor(props) {
    super(props);
    this.myClassRef = React.createRef(); 
    this.state = {
      inputText: '',
    };
  }

  handleChangeText = (text) => {
    this.setState({ inputText: text });
    if (this.myClassRef.current) {
      this.myClassRef.current.updateText(text); 
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="اكتب شيئًا هنا..."
          placeholderTextColor="#999"
          value={this.state.inputText}
          onChangeText={this.handleChangeText}
        />
        <MyClassPage ref={this.myClassRef} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 40,
    backgroundColor: '#fff',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 28,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
});
