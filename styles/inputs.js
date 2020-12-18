import styled from 'styled-components';
import {StyleSheet} from 'react-native';

export let colors = {};

// Custom Styles -----------------------
export const anotherStyles = StyleSheet.create({
  inputAlert: {
    backgroundColor: 'rgba(221, 75, 57, 0.2)',
  },
});

// Components -------------------------
export const Input = styled.TextInput`
  height: 56px;
  width: 307px;
  background-color: ${(props) => props.theme.colors.inputColor};
  border-radius: 28px;
  padding: 18px 34px;
  margin-bottom: 23px;
  font-family: 'Metropolis-Regular';
  font-size: 14px;
`;
