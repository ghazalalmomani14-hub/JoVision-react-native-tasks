/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const getIPNonBlocking = async () => {
    try {
      setIp('Fetching...');
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      setIp('Error fetching IP');
      console.log(error);
    }
  };

  const getIPBlocking = () => {
    setLoading(true);
    setIp('Fetching...');
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        const start = Date.now();
        while (Date.now() - start < 2000) {} 
        setIp(data.ip);
        setLoading(false);
      })
      .catch(error => {
        setIp('Error fetching IP');
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Get IP (Non-blocking)" onPress={getIPNonBlocking} />
      <View style={{ marginTop: 10 }}>
        <Button title="Get IP (Blocking)" onPress={getIPBlocking} />
      </View>
      <Text style={styles.text}>{loading ? 'Loading...' : ip}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Task26;
