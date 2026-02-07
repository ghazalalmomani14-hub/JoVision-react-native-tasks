// Tasks/Task27.js
import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const Task27 = () => {
  const images = [
    require('../Resources/image1.jpg'),
    require('../Resources/image2.jpg'),
    require('../Resources/image3.jpg'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
  };

  return (
    <View style={styles.container}>
      <Image source={images[currentIndex]} style={styles.image} />
      <Button title="Choose Image" onPress={nextImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});

export default Task27;
