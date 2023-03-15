import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {ChannelLogo, ThumbNail, VideItemContainer} from './styledComponents'
// console.log(formatDistanceToNow(new Date(2021, 8, 20)))

const VideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel
  const formatDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideItemContainer>
      <Link to={`/videos/${id}`}>
        <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <p>{name}</p>
        </div>
        <div>
          <p>{title}</p>
          <p>{viewCount}</p>
          <p>{formatDate.split(' ').splice(1).join(' ')} ago</p>
        </div>
      </Link>
    </VideItemContainer>
  )
}

export default VideoCard
