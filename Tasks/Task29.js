// Tasks/Task29.js
import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  Platform,
  Alert,
  ToastAndroid,
  Button,
  Modal,
  TextInput,
  Text,
} from 'react-native';

const Task29 = () => {
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

  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handlePressImage = index => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(
        `You have selected image: ${index + 1}`,
        ToastAndroid.SHORT,
      );
    } else {
      Alert.alert(`You have selected image: ${index + 1}`);
    }
  };

  const handleSubmitIndex = () => {
    // eslint-disable-next-line radix
    const index = parseInt(inputValue) - 1; // 1-based to 0-based
    if (index >= 0 && index < images.length) {
      flatListRef.current.scrollToIndex({ index, animated: true });
      setModalVisible(false);
      setInputValue('');
    } else {
      Alert.alert(
        'Invalid index',
        `Please enter a number between 1 and ${images.length}`,
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePressImage(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* زر Go to Image مرفوع قليلاً */}
      <View style={styles.buttonContainer}>
        <Button title="Go to Image" onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Enter image index (1-{images.length}):
            </Text>
            <TextInput
              style={styles.input}
              placeholder="1"
              keyboardType="numeric"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Go" onPress={handleSubmitIndex} />
            </View>
          </View>
        </View>
      </Modal>
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
  buttonContainer: {
    marginTop: 20, // رفع الزر قليلاً عن القاع
    marginBottom: 20, // مساحة صغيرة أسفل الزر
    width: '50%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  modalTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Task29;
