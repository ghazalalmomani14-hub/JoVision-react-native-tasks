/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const MyFunctionPage = () => {

  useEffect(() => {
    console.log("MyFunctionPage Loaded ✅");

    return () => {
      console.log("MyFunctionPage Unloaded ❌");
    };
  }, []); 

  return (
    <View style={{ marginTop: 20 }}>
      <Text>I AM MY FUNCTION PAGE</Text>
    </View>
  );
};


const Task21 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View>
      <Button
        title="Show"
        onPress={() => setShowPage(!showPage)}
      />

      {showPage && <MyFunctionPage />}
    </View>
  );
};

export default Task21;
