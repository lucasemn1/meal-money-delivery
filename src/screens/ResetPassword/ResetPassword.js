import React from 'react';
import { useState } from 'react';
import { Input } from '../../../styles/inputs';
import { Page } from '../../../styles/layout';
import { Subtitle, Title } from '../../../styles/typography';
import { anotherStyles } from '../../../styles/inputs';
import { Button, ButtonText } from '../../../styles/buttons';
import { StyleSheet } from 'react-native';

const ResetPassword = ({ navigation }) => {
  const [ email, setEmail ] = useState({ value: '', hasError: false });

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
        onChangeText={(e) => setName({ value: e, hasError: false })}
      />

      <Button style={buttonStyles.send}>
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