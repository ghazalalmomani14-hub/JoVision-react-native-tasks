import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={togglePlayPause}>
        <View>
          <Video
            ref={videoRef}
            source={require('../resources/sample.mp4')}
            style={styles.video}
            paused={paused}
            resizeMode="contain"
            controls={false}
            repeat
          />

          {paused && (
            <Image
              source={require('../resources/poster.jpg')}
              style={styles.poster}
              resizeMode="cover"
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task33;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  video: {
    width: 300,
    height: 200,
  },
  poster: {
    position: 'absolute',
    width: 300,
    height: 200,
  },
});
