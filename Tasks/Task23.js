import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  handleChange = (text) => {
    this.props.onTextChange(text); // نبعث النص للأب
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={this.handleChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    borderRadius: 8
  }
});

export default MyClassPage;
