import React from 'react';
import { useState } from 'react';
import { Input } from '../../../styles/inputs';
import { Page } from '../../../styles/layout';
import { Subtitle, Title } from '../../../styles/typography';
import { anotherStyles } from '../../../styles/inputs';
import { Button, ButtonText } from '../../../styles/buttons';
import { StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const ResetPassword = () => {
  const [ email, setEmail ] = useState({ value: '', hasError: false });

  function validateFields() {
    let everythingOk = true;

    if (email.value === '') {
      setEmail({ ...email, hasError: true });
      everythingOk = false;
    }

    return everythingOk;
  }

  function resetPassword() {
    if(validateFields()) {
      auth()
        .sendPasswordResetEmail(email.value)
        .then(() => {
          alert('Por favor, verifique seu email.');
        })
        .catch((err) => {
          console.log(err)
          alert('Email não cadastrado. Por favor, verifique e tente novamente.');
        });
    }    
  }

  return (
    <Page style={pageStyles.page}>
      <Title>Reset Password</Title>
      <Subtitle>
        Please enter your email to receive a
        link to  create a new password via email
      </Subtitle>

      <Input
        placeholder="Email"
        style={email.hasError ? anotherStyles.inputAlert : {}}
        value={email.value}
        onChangeText={(e) => setEmail({ value: e, hasError: false })}
      />

      <Button style={buttonStyles.send} onPress={resetPassword}>
        <ButtonText style={{ color: '#fff' }}>
          Send
        </ButtonText>
      </Button>
    </Page>
  );
}

const buttonStyles = StyleSheet.create({
  send: {
    backgroundColor: '#FC6011',
    width: 307,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
  }
});

const pageStyles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});

export default ResetPassword;