import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addCartItem: () => {},

  isDarkTheme: false,
  toggleTheme: () => {},
})

export default SavedVideosContext
