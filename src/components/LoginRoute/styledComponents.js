import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  font-size: 20px;
  font-family: 'Roboto';
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 2%;
  border: 0px;
  border-radius: 5px;
  font-size: 20px;
`
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 5%;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  margin-bottom: 3%;
`

export const InputContent = styled.input`
  padding: 2%;
  font-size: 15px;
  margin-top: 5%;
  border: 1px black solid;
  border-radius: 2px;
`
