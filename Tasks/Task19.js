/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

class MyClassPage extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 22 }}>Hello from MyClassPage 👋</Text>
        <Text>Ghazal Momani</Text>
      </View>
    );
  }
}

const Task19 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Button title="Show" onPress={() => setShowPage(true)} />

      {showPage && <MyClassPage />}
    </View>
  );
};

export default Task19;
