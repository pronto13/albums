import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
// class level property
// initial empty state
  state = {
    albums: []
  };
// life cycle component, instant
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //this.setState to modify state, never assign value directly to this.state
    .then(response => this.setState({ albums: response.data }));
  }
  //helper
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }
  // class-based component needs render method
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
