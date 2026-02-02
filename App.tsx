import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyClassPage from './Tasks/Task23';

interface AppState {
  textFromChild: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      textFromChild: ''
    };

    this.updateText = this.updateText.bind(this);
  }

  updateText(newText: string) {
    this.setState({ textFromChild: newText });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Typed Text: {this.state.textFromChild}
        </Text>

        <MyClassPage onTextChange={this.updateText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 }
});

export default App;
