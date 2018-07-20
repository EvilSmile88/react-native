import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Button} from 'react-native';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.overlay}>
            <View style={styles.container}>
              <Text>Hello World!</Text>

              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                title="Close"
                color="#1194f6"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
  container: {
    width: 200,
    height: 100,
    padding: 10,
    flexDirection: 'column',
    borderRadius: 5,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems: 'center',
  }
})
export default ModalExample;