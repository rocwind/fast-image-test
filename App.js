import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

export default class App extends React.Component {
  onLoad = (evt) => {
    console.warn(evt.nativeEvent);
  }
  render() {
    return (
      <View style={styles.container}>
        <FastImage
          onLoad={this.onLoad}
          source={{
            uri: 'https://unsplash.it/400/400?image=1'
          }}
          style={styles.image}
        />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:1,
    width: '100%',
    height: '100%',
  }
});
