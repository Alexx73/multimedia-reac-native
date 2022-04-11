import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

 function VideoPlayer ( url ) {
   console.log(url)
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text> { }</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{  uri: url  
        }}
        useNativeControls
        resizeMode="contain"
        // isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
     
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