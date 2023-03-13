import SavedVideosContext from '../../context/SavedVideosContext'

import Header from '../Header'
import EmptySavedVideosView from '../EmptySavedVideosView'
import SavedVideosView from '../SavedVideosView'

import SideBar from '../SideBar'
import {HomeContainer, HomeContentContainer} from './styledComponents'

const SavedVideos = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {savedVideosList, removeAllCartItems, isDarkTheme} = value
      const showEmptyView = savedVideosList.length === 0
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      return (
        <div data-testid="savedVideos">
          <Header />
          <HomeContainer darkMode={isDarkTheme} data-testid="savedVideos">
            <SideBar />
            <HomeContentContainer>
              {showEmptyView ? (
                <EmptySavedVideosView />
              ) : (
                <div className="cart-content-container">
                  <h1 className="cart-heading">Saved Videos</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={onClickRemoveAllBtn}
                  >
                    Remove All
                  </button>
                  <SavedVideosView />
                </div>
              )}
            </HomeContentContainer>
          </HomeContainer>
        </div>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideos
