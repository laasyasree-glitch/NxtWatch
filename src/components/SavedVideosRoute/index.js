import SavedVideosContext from '../../context/SavedVideosContext'

import Header from '../Header'
import EmptySavedVideosView from '../EmptySavedVideosView'
import SavedVideosView from '../SavedVideosView'

import SideBar from '../SideBar'
import {HomeContainer, HomeContentContainer} from './styledComponents'

const SavedVideos = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value
      const showEmptyView = savedVideosList.length === 0
      return (
        <>
          <Header />
          <HomeContainer darkMode={isDarkTheme} data-testid="savedVideos">
            <SideBar />
            <HomeContentContainer>
              {showEmptyView ? (
                <EmptySavedVideosView />
              ) : (
                <div className="cart-content-container">
                  <h1 className="cart-heading">Saved Videos</h1>
                  <SavedVideosView />
                </div>
              )}
            </HomeContentContainer>
          </HomeContainer>
        </>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideos
