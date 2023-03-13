import {Link} from 'react-router-dom'

const GamingCard = props => {
  const {gameData} = props
  const {id, title, thumbnailUrl, viewCount} = gameData

  return (
    <li>
      <Link to={`/videos/${id}`}>
        <img src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <p>{title}</p>
          <p>{viewCount}</p>
        </div>
      </Link>
    </li>
  )
}

export default GamingCard
