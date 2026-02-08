import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';

function Task32() {
  const [error, setError] = useState(null);


  function handleVideoError(err) {
    console.log('Video Error:', err);
    setError('حدث خطأ أثناء تشغيل الفيديو');
  }

  function renderErrorMessage() {
    if (error === null) {
      return null;
    }

    return <Text style={styles.errorText}>{error}</Text>;
  }

  function renderVideoPlayer() {
    return (
      <Video
        source={require('../resources/sample.mp4')}
        poster={require('../resources/poster.jpg')}
        posterResizeMode="cover"
        resizeMode="contain"
        controls={true}
        onError={handleVideoError}
        style={styles.video}
      />
    );
  }


  return (
    <View style={styles.container}>
      {renderVideoPlayer()}
      {renderErrorMessage()}
    </View>
  );
}

export default Task32;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '90%',
    height: 220,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
