/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Button } from 'react-native';

class MyClassPage extends React.Component {
  componentDidMount() {
    console.log("MyClassPage loaded");
  }

  componentWillUnmount() {
    console.log("MyClassPage unloaded");
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button title="I am MyClassPage" onPress={() => {}} />
      </View>
    );
  }
}

const Task20 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Button title="Show" onPress={() => setShowPage(!showPage)} />

      {showPage && <MyClassPage />}
    </View>
  );
};

export default Task20;
