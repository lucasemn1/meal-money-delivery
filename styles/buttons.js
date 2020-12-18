import styled from 'styled-components';
import {StyleSheet} from 'react-native';

// Custom Styles -----------------------
export const anotherStyles = StyleSheet.create({});

// Components -------------------------
export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 307px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'Metropolis-Regular';
  color: ${(props) => props.theme.colors.secondaryFontColor};
`;

export const OutlineButton = styled.TouchableOpacity`
  width: 307px;
  height: 56px;
  border-radius: 28px;
  border-color: '#FC6011';
  border-style: 'solid';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  border-width: 1px;
  margin-top: 20px;
`;