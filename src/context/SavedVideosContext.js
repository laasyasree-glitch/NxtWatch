import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addCartItem: () => {},

  isDarkTheme: false,
  toggleTheme: () => {},

  likeStatus: false,
  dislikeStatus: false,
  toggleActiveLikeStatus: () => {},
  toggleActiveDislikeStatus: () => {},
})

export default SavedVideosContext
