import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  max-width: 100vw;
  min-height: 40vh;
  padding: 5%;
  border-radius: 10px;
  background-size: cover;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: ${props => (props.bannerCheck === '' ? 'visible' : 'none')};
`
