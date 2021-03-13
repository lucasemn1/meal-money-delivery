import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Page,
  LoginText,
  LoginMessageText,
  Input,
  Button,
  ButtonText,
  AlternativeLoginLabel,
  SocialNetworkIcon,
  FlexRow,
} from './style';
import {
  BoldText
} from '../../../styles/typography';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import * as firebaseServices from '../../services/firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', hasError: false });
  const [password, setPassword] = useState({ value: '', hasError: false });

  function login() {
    // alert('OPAA');
    let formOk = true;

    if (email.value === '') {
      setEmail({
        ...email,
        hasError: true,
      });

      formOk = false;
    }

    if (password.value === '') {
      setPassword({
        ...password,
        hasError: true,
      });

      formOk = false;
    }

    if (formOk) {
      auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          alert('Login realizado com sucesso!');
        })
        .catch((error) =>
          alert(firebaseServices.ERRORS_MESSAGES[error.code])
          // alert(error.code)
        );
    }
  }

  return (
    <Page>
      <StatusBar barStyle="dark-content" />
      <LoginText>Login agora</LoginText>
      <LoginMessageText>Add your details to login</LoginMessageText>

      <Input
        placeholder="Email"
        autoCompleteType="email"
        style={email.hasError ? styles.inputAlert : {}}
        value={email.value}
        onChangeText={(e) =>
          setEmail({
            value: e,
            hasError: false,
          })
        }
      />
      <Input
        placeholder="Senha"
        autoCompleteType="password"
        secureTextEntry={true}
        style={password.hasError ? styles.inputAlert : {}}
        value={password.value}
        onChangeText={(e) =>
          setPassword({
            value: e,
            hasError: false,
          })
        }
      />

      <Button style={{ backgroundColor: '#FC6011' }} onPress={login}>
        <ButtonText style={{ color: '#ffffff', fontSize: 16 }}>Login</ButtonText>
      </Button>

      <Button onPress={() => navigation.navigate('ResetPassword')}>
        <ButtonText>Forgot your password?</ButtonText>
      </Button>

      {/* <AlternativeLoginLabel>or Login With</AlternativeLoginLabel>

      <Button
        style={{backgroundColor: '#367FC0'}}
        onPress={loginWithFacebook}
      >
        <FlexRow>
          <SocialNetworkIcon source={require('../../../assets/icons/facebook-letter-logo.png')} />
          <ButtonText style={{color: '#ffffff', fontSize: 16}}>Login with Facebook</ButtonText>
        </FlexRow>
      </Button>

      <Button style={{backgroundColor: '#DD4B39', marginTop: 28}}>
        <FlexRow>
          <SocialNetworkIcon source={require('../../../assets/icons/google-plus-logo.png')} />
          <ButtonText style={{color: '#ffffff', fontSize: 16}}>Login with Google</ButtonText>
        </FlexRow>
      </Button> */}

      <Button onPress={() => navigation.navigate('Register')}>
        <ButtonText>
          Don't have an Account? <BoldText style={{ color: '#DD4B39' }}>Sign Up</BoldText>
        </ButtonText>
      </Button>
    </Page>
  );
};

const styles = StyleSheet.create({
  inputAlert: {
    backgroundColor: 'rgba(221, 75, 57, 0.2)',
  },
});

export default Login;
