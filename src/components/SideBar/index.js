import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {HiOutlineFire, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideBarContainer,
  OptionItem,
  OptionsContainer,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaIcon,
  ContactUsDescription,
} from './styledComponent'

class SideBar extends Component {
  render() {
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SideBarContainer darkMode={isDarkTheme}>
              <OptionsContainer>
                <Link to="/">
                  <OptionItem darkMode={isDarkTheme}>
                    {isDarkTheme ? (
                      <AiFillHome className="icon" />
                    ) : (
                      <AiOutlineHome className="icon" />
                    )}
                    Home
                  </OptionItem>
                </Link>

                <Link to="/trending">
                  <OptionItem darkMode={isDarkTheme}>
                    {isDarkTheme ? (
                      <HiFire className="icon" />
                    ) : (
                      <HiOutlineFire className="icon" />
                    )}
                    Trending
                  </OptionItem>
                </Link>

                <Link to="/gaming">
                  <OptionItem darkMode={isDarkTheme}>
                    <SiYoutubegaming className="icon" />
                    Gaming
                  </OptionItem>
                </Link>

                <Link to="/saved-videos">
                  <OptionItem darkMode={isDarkTheme}>
                    <BiListPlus className="icon" />
                    Saved Videos
                  </OptionItem>
                </Link>
              </OptionsContainer>
              <ContactUsContainer darkMode={isDarkTheme}>
                <ContactUsHeading>CONTACT US</ContactUsHeading>
                <SocialMediaContainer>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <ContactUsDescription>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDescription>
              </ContactUsContainer>
            </SideBarContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default SideBar
