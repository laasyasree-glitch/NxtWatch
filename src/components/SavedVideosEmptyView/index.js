import './index.css'

const EmptySavedVideosView = () => (
  <div className="emptySavedVideos">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      alt="no saved videos"
      className="empty-saved"
    />
    <h1 className="cart-empty-heading">No saved videos found</h1>
    <p>You can save your videos while watching them</p>
  </div>
)

export default EmptySavedVideosView
