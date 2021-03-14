import React, { useState } from 'react';
import { Page } from '../../../styles/layout';
import { Title, Subtitle } from '../../../styles/typography';
import { Input, anotherStyles } from '../../../styles/inputs';
import { Button, ButtonText } from '../../../styles/buttons';
import { ERRORS_MESSAGES } from '../../services/firebase';
import { StatusBar } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const Register = ({ navigation }) => {
  const [name, setName] = useState({
    value: '',
    hasError: false,
  });
  const [email, setEmail] = useState({
    value: '',
    hasError: false,
  });
  const [mobileNumber, setMobileNumber] = useState({
    value: '',
    hasError: false,
  });
  const [address, setAddress] = useState({
    value: '',
    hasError: false,
  });
  const [password, setPassword] = useState({
    value: '',
    hasError: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    hasError: false,
  });

  function validateFields() {
    let everythingOk = true;

    if (name.value === '') {
      setName({ ...name, hasError: true });
      everythingOk = false;
    }
    if (email.value === '') {
      setEmail({ ...email, hasError: true });
      everythingOk = false;
    }
    if (mobileNumber.value === '') {
      setMobileNumber({ ...mobileNumber, hasError: true });
      everythingOk = false;
    }
    if (address.value === '') {
      setAddress({ ...address, hasError: true });
      everythingOk = false;
    }
    if (password.value === '') {
      setPassword({ ...password, hasError: true });
      everythingOk = false;
    }
    if (confirmPassword.value === '') {
      setConfirmPassword({ ...confirmPassword, hasError: true });
      everythingOk = false;
    }
    if (password.value !== confirmPassword.value) {
      setPassword({ ...password, hasError: true });
      setConfirmPassword({ ...confirmPassword, hasError: true });
      everythingOk = false;

      alert('As senhas não coincidem');
    }

    return everythingOk;
  }

  async function singIn() {
    if (await registerUser()) {
      auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          alert('Sua conta foi criada!');
          navigation.navigate('Login');
        })
        .catch((error) => {
          alert(ERRORS_MESSAGES[error.code]);
        });
    }
  }

  async function registerUser() {
    if (validateFields()) {
      try {
        const newReference = database().ref('/users').push();

        await newReference.set({
          name: name.value,
          email: email.value,
          mobileNumber: mobileNumber.value,
          address: address.value,
        });

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    } else {
      return false;
    }
  }

  return (
    <Page>
      <StatusBar barStyle="dark-content" />
      <Title>Sign Up</Title>
      <Subtitle>Add your details to sign up</Subtitle>

      <Input
        placeholder="Name"
        style={name.hasError ? anotherStyles.inputAlert : {}}
        value={name.value}
        onChangeText={(e) => setName({ value: e, hasError: false })}
      />
      <Input
        placeholder="Email"
        style={email.hasError ? anotherStyles.inputAlert : {}}
        value={email.value}
        onChangeText={(e) => setEmail({ hasError: false, value: e })}
      />
      <Input
        placeholder="Mobile number"
        style={mobileNumber.hasError ? anotherStyles.inputAlert : {}}
        value={mobileNumber.value}
        onChangeText={(e) => setMobileNumber({ hasError: false, value: e })}
      />
      <Input
        placeholder="Address"
        style={address.hasError ? anotherStyles.inputAlert : {}}
        value={address.value}
        onChangeText={(e) => setAddress({ hasError: false, value: e })}
      />
      <Input
        placeholder="Password"
        autoCompleteType="password"
        secureTextEntry={true}
        style={password.hasError ? anotherStyles.inputAlert : {}}
        value={password.value}
        onChangeText={(e) => setPassword({ hasError: false, value: e })}
      />
      <Input
        placeholder="Confirm password"
        autoCompleteType="password"
        secureTextEntry={true}
        style={confirmPassword.hasError ? anotherStyles.inputAlert : {}}
        value={confirmPassword.value}
        onChangeText={(e) => setConfirmPassword({ hasError: false, value: e })}
      />

      <Button style={{ backgroundColor: '#FC6011' }} onPress={singIn}>
        <ButtonText style={{ color: '#ffffff' }}>Sing Up</ButtonText>
      </Button>
    </Page>
  );
};

export default Register;
