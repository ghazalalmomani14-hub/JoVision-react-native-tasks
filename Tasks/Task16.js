import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleName} />
      {showName && <Text style={styles.nameText}>Ghazal Momani</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Task16;
