import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import useCurrentTime from "./Tasks/Task34";

export default function App() {
  const [showTime, setShowTime] = useState(true);
  const time = useCurrentTime();

  return (
    <View style={styles.container}>
      <Button
        title={showTime ? "Hide Time" : "Show Time"}
        onPress={() => setShowTime(!showTime)}
      />

      {showTime && (
        <View style={styles.box}>
          <Text style={styles.text}>
            Time: {time.toLocaleTimeString()}
          </Text>
          <Text style={styles.text}>
            Date: {time.toDateString()}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});
