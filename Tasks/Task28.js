// Tasks/Task28.js
import React from 'react';
import { View, FlatList, Image, Pressable, StyleSheet, Dimensions, Platform, Alert, ToastAndroid } from 'react-native';

const Task28 = () => {
  const images = [
    require('../Resources/image1.jpg'),
    require('../Resources/image2.jpg'),
    require('../Resources/image3.jpg'),
    require('../Resources/image4.jpg'),
    require('../Resources/image5.jpg'),
    require('../Resources/image6.jpg'),
    require('../Resources/image7.jpg'),
    require('../Resources/image8.jpg'),
    require('../Resources/image9.jpg'),
    require('../Resources/image10.jpg'),
  ];

  const handlePress = (index) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(`You have selected image: ${index + 1}`, ToastAndroid.SHORT);
    } else {
      Alert.alert(`You have selected image: ${index + 1}`);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePress(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: screenWidth / 3,
    height: 150,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default Task28;
