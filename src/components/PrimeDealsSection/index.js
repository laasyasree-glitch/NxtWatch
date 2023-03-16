import {AiOutlineClose} from 'react-icons/ai'
import {BannerContainer, CloseButton, GetButton} from './styledComponents'

const PrimeDealsSection = props => {
  const {closeBannerClicked, bannerCheck} = props

  const onClickClose = () => closeBannerClicked()
  return (
    <BannerContainer bannerCheck={bannerCheck} data-testid="banner">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <GetButton type="button">GET IT NOW</GetButton>
      </div>

      <CloseButton type="button" onClick={onClickClose}>
        <AiOutlineClose />
      </CloseButton>
    </BannerContainer>
  )
}
export default PrimeDealsSection
