import styled from 'styled-components';

export const Page = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding: 0 35px;
`;