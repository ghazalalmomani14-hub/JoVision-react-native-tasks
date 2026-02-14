import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import { saveUserData, getUserData } from './Tasks/Task35'; 

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const checkStorage = async () => {
      const data = await getUserData();
      if (data && data.timestamp) {
        const now = new Date().getTime();
        const savedTime = new Date(data.timestamp).getTime();
        const diff = (now - savedTime) / 1000; 

        if (diff < 60) { 
          setName(data.name);
          setAge(data.age);
          setCountry(data.country);
        }
      }
    };
    checkStorage();
  }, []);

  const handleSubmit = async () => {
    const userData = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(),
    };
    await saveUserData(userData);
    Alert.alert("Success", "Data saved!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Information Form</Text>
      <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Age" style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput placeholder="Country" style={styles.input} value={country} onChangeText={setCountry} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 20, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10 }
});