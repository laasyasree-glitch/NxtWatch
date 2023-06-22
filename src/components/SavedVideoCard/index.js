import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideItemContainer,
  ThumbNail,
  ChannelLogo,
  Title,
  Description,
  Details,
} from './styledComponents'

const SavedVideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel
  const formatDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <VideItemContainer>
      <Link to={`/videos/${id}`}>
        <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <Title>
        <ChannelLogo src={profileImageUrl} alt="channel logo" />

        <Description>
          <p>{name}</p>

          <p>{title}</p>
          <Details>
            <p>{viewCount}</p>
            <p>{formatDate.split(' ').splice(1).join(' ')} ago</p>
          </Details>
        </Description>
      </Title>
    </VideItemContainer>
  )
}

export default SavedVideoCard
