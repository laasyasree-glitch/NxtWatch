import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import SavedVideosContext from './context/SavedVideosContext'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'

import './App.css'

class App extends Component {
  state = {
    savedVideosList: [],
    isDarkTheme: false,
    likeStatus: false,
    dislikeStatus: false,
    saveStatus: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addCartItem = product => {
    console.log(product)
    const {savedVideosList} = this.state
    const productObject = savedVideosList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (!productObject) {
      const updatedCartList = [...savedVideosList, product]
      this.setState({savedVideosList: updatedCartList})
    }
  }

  removeCartItem = id => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(x => x.id !== id)
    this.setState({savedVideosList: updatedList})
  }

  toggleSaveButton = videoDetails => {
    this.setState(ps => ({
      saveStatus: !ps.saveStatus,
    }))
    const {saveStatus} = this.state
    console.log(saveStatus, videoDetails)
    if (!saveStatus) {
      this.addCartItem(videoDetails)
    } else {
      this.removeCartItem(videoDetails.id)
    }
  }

  toggleActiveLikeStatus = () =>
    this.setState(ps => ({
      likeStatus: !ps.likeStatus,
      dislikeStatus: false,
    }))

  toggleActiveDislikeStatus = () =>
    this.setState(ps => ({
      dislikeStatus: !ps.dislikeStatus,
      likeStatus: false,
    }))

  render() {
    const {
      savedVideosList,
      isDarkTheme,
      likeStatus,
      dislikeStatus,
      saveStatus,
    } = this.state

    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          likeStatus,
          dislikeStatus,
          saveStatus,
          toggleActiveLikeStatus: this.toggleActiveLikeStatus,
          toggleActiveDislikeStatus: this.toggleActiveDislikeStatus,
          toggleSaveButton: this.toggleSaveButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <Route path="/bad-request" component={NotFoundRoute} />
          <Redirect to="bad-request" />
        </Switch>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
