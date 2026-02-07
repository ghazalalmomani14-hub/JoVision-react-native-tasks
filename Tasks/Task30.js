// Tasks/Task30.js
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

const Task30 = () => {
  const [images, setImages] = useState([
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
  ]);

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

  const handleRemoveImage = index => {
    Alert.alert(
      'Remove Image',
      `Are you sure you want to remove image ${index + 1}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            const newImages = [...images];
            newImages.splice(index, 1);
            setImages(newImages);
          },
        },
      ],
      { cancelable: true },
    );
  };

  const handleSubmitIndex = () => {
    // eslint-disable-next-line radix
    const index = parseInt(inputValue) - 1;
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
          <View style={styles.imageWrapper}>
            <Pressable onPress={() => handlePressImage(index)}>
              <Image source={item} style={styles.image} />
            </Pressable>
            {/* أيقونة الحذف */}
            <Pressable
              style={styles.deleteIcon}
              onPress={() => handleRemoveImage(index)}
            >
              <Text style={styles.deleteText}>X</Text>
            </Pressable>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

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
  imageWrapper: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: screenWidth / 3,
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255,0,0,0.7)',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
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

export default Task30;
