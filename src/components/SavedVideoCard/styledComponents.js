import styled from 'styled-components'

export const VideItemContainer = styled.div`
  width: 30%;
  margin: 10px;
  @media (max-width: 767px) {
    width: 40%;
    margin: 5px;
  }
`
export const ThumbNail = styled.img`
  width: 80%;
`

export const ChannelLogo = styled.img`
  width: 20%;
  align-self: flex-start;
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`
