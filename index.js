// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component, 1 component per file
const App = () => {
  return (
    // flex: 1 not needed anymore
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};
// Render it to the device
AppRegistry.registerComponent('albums', () => App);
