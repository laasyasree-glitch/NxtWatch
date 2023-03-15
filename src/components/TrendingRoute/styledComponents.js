import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const HomeContentContainer = styled.div`
  min-height: 100px;
  margin-top: 50px;
  width: 80%;
  padding: 25px;
`

export const VideosListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
