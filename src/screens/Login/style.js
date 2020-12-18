import styled from 'styled-components/native';

export const Page = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const LoginText = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 12px;
`;

export const LoginMessageText = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondaryFontColor};
  margin-bottom: 36px;
`;

export const Input = styled.TextInput`
  height: 56px;
  width: 307px;
  background-color: #f2f2f2;
  border-radius: 28px;
  padding: 18px 34px;
  margin-bottom: 29px;
  font-family: 'Metropolis-Regular';
  font-size: 14px;
`;

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

export const AlternativeLoginLabel = styled.Text`
  font-size: 14px;
  font-family: 'Metropolis-Regular';
  color: ${(props) => props.theme.colors.secondaryFontColor};
  margin-top: 31px;
  margin-bottom: 27px;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SocialNetworkIcon = styled.Image`
  margin-right: 10px;
`;