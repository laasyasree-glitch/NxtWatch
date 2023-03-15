import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 15px;
  padding: 2%;
`
export const VideoItemDetailsContainer = styled.div`
  margin-top: 2%;
`
export const Video = styled.div`
  display: flex;
  justify-content: center;
`
export const ChannelLogo = styled.img`
  width: 80px;
  height: 80px;
`
export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const TopSubOne = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonsStatus = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BottomContainer = styled.div`
  display: flex;
`

export const CustomButton = styled.button`
  color: ${props => (props.isActive === true ? '#2563eb' : '#64748b')};
  margin: 2%;
  display: flex;
  align-self: flex-start;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
