import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import SignIn from '../components/auth/SignIn';

class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignIn {...this.props}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;