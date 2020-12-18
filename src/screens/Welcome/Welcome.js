import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Page, Message } from './style';

const Welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0)"/>
      <Page>
        <Image style={ imageStyles.banner } source={require('../../../assets/imgs/organe_top_shape.png')} />
        <Image style={ imageStyles.logo } source={require('../../../assets/imgs/Logo.png')} />
        <Message>
          Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
        </Message>
        <TouchableOpacity 
          style={buttonStyles.login}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={buttonStyles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={buttonStyles.createAcount}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={buttonStyles.createAcountText}>Criar conta</Text>
        </TouchableOpacity>
      </Page>
    </>
  );
}

const buttonStyles = StyleSheet.create({
  login: {
    backgroundColor: '#FC6011',
    width: 307,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
  },

  loginText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
  },

  createAcount: {
    width: 307,
    height: 56,
    borderRadius: 28,
    borderColor: '#FC6011',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 20,
  },

  createAcountText: {
    color: '#FC6011',
    fontSize: 16,
    fontFamily: 'Metropolis-Regular',
  }
})

const imageStyles = StyleSheet.create({
  banner: {
    marginTop: -100,
    width: '100%',
  },

  logo: {
    marginTop: "-30%",
  }
})

export default Welcome;