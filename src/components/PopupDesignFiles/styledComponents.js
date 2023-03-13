import styled from 'styled-components'

export const LogOutButton = styled.button`
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : ' #3b82f6')};
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #3b82f6')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const Heading = styled.h1`
  color: #3b82f6;
`
