import SavedVideosContext from '../../context/SavedVideosContext'
import SavedVideoCard from '../SavedVideoCard'
import {VideosListContainer} from './styledComponents'

const SavedVideosView = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {savedVideosList} = value

      return (
        <VideosListContainer>
          {savedVideosList.map(eachCartItem => (
            <SavedVideoCard key={eachCartItem.id} videoData={eachCartItem} />
          ))}
        </VideosListContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideosView
