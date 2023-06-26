import {Link} from 'react-router-dom'
import {Component} from 'react'
import SavedVideosContext from '../../context/SavedVideosContext'
import PopupDesignFiles from '../Header_Logout_PopUp'
import {
  NavDesktopContainer,
  WebsiteLogo,
  ThemeButton,
  DropDown,
  Line,
} from './styledComponents'

import './index.css'

class Header extends Component {
  state = {
    menuOpen: false,
  }

  handleMenuOpen = () => {
    this.setState(ps => ({menuOpen: !ps.menuOpen}))
  }

  render() {
    const {menuOpen} = this.state

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

              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                <img alt="themeLogo" src={themeImageURL} />
              </ThemeButton>
              <DropDown>
                <button
                  type="button"
                  className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
                  onClick={this.handleMenuOpen}
                >
                  <Line />
                  <Line />
                  <Line />
                </button>
                {menuOpen && (
                  <div className={`menu-content ${menuOpen ? 'open' : ''}`}>
                    <div className="dropDown">
                      {/* <button
                        type="button"
                        className="trigger-button"
                        onClick={this.handleMenuOpen}
                      >
                        <IoMdClose className="icon" />
                      </button> */}
                      <ul className="list">
                        <li>
                          <Link to="/">
                            <button className="navItems" type="button">
                              Home
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/trending">
                            <button className="navItems" type="button">
                              Trending
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/gaming">
                            <button className="navItems" type="button">
                              Gaming
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/saved-videos">
                            <button className="navItems" type="button">
                              Saved Videos
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </DropDown>
              <PopupDesignFiles />
            </NavDesktopContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Header
