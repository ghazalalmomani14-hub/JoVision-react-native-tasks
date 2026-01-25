import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task17 = () => {
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <View style={styles.container}>
      <Button title={showName ? 'Hide' : 'Show'} onPress={toggleName} />

      {showName && <Text style={styles.nameText}>Ghazal Momani</Text>}
    </View>
  );
};

export default Task17;

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
