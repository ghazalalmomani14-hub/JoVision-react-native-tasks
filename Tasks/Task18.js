import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Task18 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading...</Text>
        </>
      ) : (
        <Text style={styles.nameText}>Ghazal Momani</Text>
      )}
    </View>
  );
};

export default Task18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 18,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
