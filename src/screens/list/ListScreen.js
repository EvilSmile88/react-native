import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Events from '../../components/event/Event';

class ListScreen extends Component {
  render() {
    return (
      <Events/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ListScreen