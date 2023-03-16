import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  max-width: 100%;
  height: 30vh;
  padding: 3%;
  border-radius: 10px;
  background-size: cover;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  display: ${props => (props.bannerCheck === '' ? 'visible' : 'none')};
  font-family: 'Roboto';
`
export const CloseButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  border: 0px;
  color: #424242;
  cursor: pointer;
`
export const GetButton = styled.button`
  background-color: transparent;
  font-size: 18px;
  color: #000000;
  cursor: pointer;
`
