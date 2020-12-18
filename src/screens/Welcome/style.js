import styled from 'styled-components/native'

export const Page = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundColor};
`

export const Message = styled.Text`
  color: #7C7D7E;
  text-align: center;
  /* font-family: ; */
  font-size: 13px;
  margin: 44px 44px 36px 44px;
  font-family: 'Metropolis-Regular';
`