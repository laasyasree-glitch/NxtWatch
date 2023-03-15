import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

const SavedVideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel
  console.log(videoData)
  return (
    <li>
      <Link to={`/videos/${id}`}>
        <img src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <img src={profileImageUrl} alt="channel logo" />
          <p>{name}</p>
        </div>
        <div>
          <p>{title}</p>
          <p>{viewCount}</p>
          <p>{formatDistanceToNow(new Date(publishedAt))}</p>
        </div>
      </Link>
    </li>
  )
}

export default SavedVideoCard
