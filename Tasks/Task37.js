import React, { useState, useCallback } from 'react';
import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';

function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task37 = () => {
  const createWords = () =>
    Array.from({ length: 100 }, () =>
      generateRandomWord(Math.floor(Math.random() * 8) + 3),
    );

  const [words, setWords] = useState(createWords());
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setWords(createWords());
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {words.map((word, index) => (
        <Text key={index} style={styles.text}>
          {word}
        </Text>
      ))}
    </ScrollView>
  );
};

export default Task37;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
