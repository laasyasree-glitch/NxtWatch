import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

// console.log(formatDistanceToNow(new Date(2021, 8, 20)))

const VideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel

  return (
    <li>
      <Link to={`/videos/${id}`}>
        <img src={thumbnailUrl} alt="thumbNail" />
        <div>
          <img src={profileImageUrl} alt="channel logo" />
          <h1>{name}</h1>
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

export default VideoCard