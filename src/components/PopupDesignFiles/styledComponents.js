import styled from 'styled-components'

export const LogOutButton = styled.button`
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : ' #3b82f6')};
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #3b82f6')};
  font-family: 'Roboto';
  font-size: 17px;
  cursor: pointer;
  padding: 5%;
`

export const PopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  padding: 3%;
  font-size: 25px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 25px;
`
export const PopupButton = styled.button`
  height: 35px;
  color: ${props => (props.outline ? '#181818' : '#ffffff')};
  background-color: ${props => (props.outline ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.outline ? '#181818' : '#3b82f6')};
  border-radius: 5px;
  width: 100%;
  margin-right: 10%;
  cursor: pointer;
`
