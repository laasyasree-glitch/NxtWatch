import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
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
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  removeAllCartItems = () => {
    this.setState({savedVideosList: []})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({savedVideosList: updatedCartList})
  }

  addCartItem = product => {
    const {savedVideosList} = this.state
    const productObject = savedVideosList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      console.log('Hello')
    } else {
      const updatedCartList = [...savedVideosList, product]

      this.setState({savedVideosList: updatedCartList})
    }
  }

  render() {
    const {savedVideosList, isDarkTheme} = this.state

    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
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
