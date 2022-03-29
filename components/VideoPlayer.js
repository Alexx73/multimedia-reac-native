import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

 function VideoPlayer ( url ) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
            // uri: url1
          uri: 
          // 'https://firebasestorage.googleapis.com/v0/b/app-tienda-18e1b.appspot.com/o/mov%2FM4.mp4?alt=media&token=de5aac0c-dbb0-4c8f-8a4f-bba41b1c9d23'

          'https://firebasestorage.googleapis.com/v0/b/app-tienda-18e1b.appspot.com/o/mov%2FM4.mp4?alt=media&token=de5aac0c-dbb0-4c8f-8a4f-bba41b1c9d23'

           ,
        }}
        useNativeControls
        resizeMode="contain"
        // isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        {/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({

    video: {
        width: 340,
        height: 280,
    }
})

export default VideoPlayer