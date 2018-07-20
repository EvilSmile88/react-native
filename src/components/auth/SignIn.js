import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class SignIn extends Component {
   constructor(props) {
     super(props);
     this.state = {
       emailValue: '',
       passwordValue: '',
     }
  }
  render() {
     const { navigation } = this.props
    return (
      <View>
        <Text style={styles.header}>{'Sign In'.toUpperCase()}</Text>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          keyboardType='email-address'
          placeholder='Enter your mail...'
          onChangeText={emailValue => this.setState({emailValue})}
          value={this.state.emailValue}
        />
        <Text>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={passwordValue => this.setState({passwordValue})}
          value={this.state.passwordValue}
        />
        <TouchableOpacity onPress={ ()=> navigation.navigate('list')}>
          <View style={styles.button}>
            <Text style={{color: "white", fontWeight: 'bold'}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    width: 200,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    ...Platform.select({
      ios: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }
    }),
    height: 40,
    width: 200,
  },
  button: {
    height: 35,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#68beac',
    borderRadius: 3,
    elevation: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  inputEmpty: {
    color: 'rgba(0,0,0,0.3)',
  }
});
export default SignIn;