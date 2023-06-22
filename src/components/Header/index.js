import {Link} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {HiFire, HiOutlineFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import SavedVideosContext from '../../context/SavedVideosContext'

import PopupDesignFiles from '../Header_Logout_PopUp'
import {
  NavDesktopContainer,
  WebsiteLogo,
  ThemeButton,
  DropDown,
  DropdownOptions,
} from './styledComponents'

class Header extends Component {
  state = {
    selectedOption: '',
    isDropdownOpen: false,
  }

  handleOptionChange = event => {
    const val = event.target.value
    this.setState({selectedOption: val})
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }))
  }

  closeDropdown = () => {
    this.setState({isDropdownOpen: false})
  }

  render() {
    const {selectedOption, isDropdownOpen} = this.state

    return (
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
              <Link to="/">
                <WebsiteLogo src={websiteLogo} alt="website logo" />
              </Link>
              <DropDown>
                <select
                  value={selectedOption}
                  onChange={this.handleOptionChange}
                  onClick={this.closeDropdown}
                >
                  <option value="/">Home</option>
                  <option value="/trending">Trending</option>
                  <option value="/gaming">Gaming</option>
                  <option value="/saved-videos">Saved Videos</option>
                </select>
                {selectedOption === '/' && (
                  <Link to="/">
                    {isDarkTheme ? <AiFillHome /> : <AiOutlineHome />}
                  </Link>
                )}
                {selectedOption === '/trending' && (
                  <Link to="/trending">
                    {isDarkTheme ? <HiFire /> : <HiOutlineFire />}
                  </Link>
                )}
                {selectedOption === '/gaming' && (
                  <Link to="/gaming">
                    <SiYoutubegaming />
                  </Link>
                )}
                {selectedOption === '/saved-videos' && (
                  <Link to="/saved-videos">
                    <BiListPlus />
                  </Link>
                )}
              </DropDown>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                <img alt="themeLogo" src={themeImageURL} />
              </ThemeButton>
              <PopupDesignFiles />
              {isDropdownOpen && (
                <DropdownOptions>
                  <Link to="/">Home</Link>
                  <Link to="/trending">Trending</Link>
                  <Link to="/gaming">Gaming</Link>
                  <Link to="/saved-videos">Saved Videos</Link>
                </DropdownOptions>
              )}
            </NavDesktopContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Header
