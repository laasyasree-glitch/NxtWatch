import {AiOutlineClose} from 'react-icons/ai'
import {BannerContainer} from './styledComponents'

const PrimeDealsSection = props => {
  const {closeBannerClicked, bannerCheck} = props

  const onClickClose = () => closeBannerClicked()
  return (
    <BannerContainer bannerCheck={bannerCheck} data-testid="banner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
      <button type="button">GET IT NOW</button>

      <button type="button" onClick={onClickClose}>
        <AiOutlineClose />
      </button>
    </BannerContainer>
  )
}
export default PrimeDealsSection
