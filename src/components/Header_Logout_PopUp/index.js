import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import 'reactjs-popup/dist/index.css'

import {
  LogOutButton,
  PopUpContent,
  ButtonsContainer,
  PopupButton,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

const LogOutPopUp = props => {
  const logOutFunction = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <LogOutButton
                  isDarkTheme={isDarkTheme}
                  type="button"
                  className="trigger-button"
                >
                  Logout
                </LogOutButton>
              }
            >
              {close => (
                <PopUpContent isDarkTheme={isDarkTheme}>
                  <p>Are you sure, you want to logout ?</p>
                  <ButtonsContainer>
                    <PopupButton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                      outline
                    >
                      No
                    </PopupButton>
                    <PopupButton type="button" onClick={logOutFunction}>
                      Yes
                    </PopupButton>
                  </ButtonsContainer>
                </PopUpContent>
              )}
            </Popup>
          </div>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default withRouter(LogOutPopUp)
