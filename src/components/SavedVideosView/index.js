import SavedVideosContext from '../../context/SavedVideosContext'
import SavedVideoCard from '../SavedVideoCard'

const SavedVideosView = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {savedVideosList} = value

      return (
        <ul className="cart-list">
          {savedVideosList.map(eachCartItem => (
            <SavedVideoCard key={eachCartItem.id} videoData={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideosView
