import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default SavedVideosContext
