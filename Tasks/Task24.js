import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MyFunctionPage(props, ref) {
  const [text, setText] = useState('Waiting...');

  function updateText(value) {
    setText(value);
  }

  useImperativeHandle(ref, function () {
    return {
      updateText,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default forwardRef(MyFunctionPage);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
