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

  render() {
    const {savedVideosList, isDarkTheme} = this.state

    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
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
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
