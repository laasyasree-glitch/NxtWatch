import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import 'reactjs-popup/dist/index.css'

import {LogOutButton} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

const LogOutPopUp = props => {
  const logOutFunction = () => {
    const {history} = props
    console.log(history)
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
                <>
                  <div>
                    <p>Are you sure, you want to logout</p>
                    <button type="button" onClick={logOutFunction}>
                      Confirm
                    </button>
                  </div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                </>
              )}
            </Popup>
          </div>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default withRouter(LogOutPopUp)
