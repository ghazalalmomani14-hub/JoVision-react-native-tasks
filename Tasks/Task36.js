import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

// function from hint
function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36 = () => {
  // generate 100 random words
  const words = Array.from({ length: 100 }, () =>
    generateRandomWord(Math.floor(Math.random() * 8) + 3),
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {words.map((word, index) => (
        <Text key={index} style={styles.text}>
          {word}
        </Text>
      ))}
    </ScrollView>
  );
};

export default Task36;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
