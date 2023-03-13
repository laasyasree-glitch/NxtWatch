import {Link} from 'react-router-dom'

import SavedVideosContext from '../../context/SavedVideosContext'

import PopupDesignFiles from '../PopupDesignFiles'
import {
  NavDesktopContainer,
  TopHeader,
  WebsiteLogo,
  OptionsContainer,
  ThemeLogo,
  ThemeButton,
  Profile,
} from './styledComponents'

const Header = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <NavDesktopContainer darkMode={isDarkTheme}>
          <TopHeader>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <OptionsContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                <ThemeLogo src={themeImageURL} />
              </ThemeButton>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <br />
              <PopupDesignFiles />
            </OptionsContainer>
          </TopHeader>
        </NavDesktopContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default Header
