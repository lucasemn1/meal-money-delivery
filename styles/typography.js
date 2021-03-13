import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 12px;
  color: ${(props) => props.theme.colors.primaryFontColor};
`;

export const Subtitle = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondaryFontColor};
  margin-bottom: 36px;
  text-align: center;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;