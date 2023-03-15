import {Link} from 'react-router-dom'
import {GameContainer, GameImage} from './styledComponents'

const GamingCard = props => {
  const {gameData} = props
  const {id, title, thumbnailUrl, viewCount} = gameData

  return (
    <GameContainer>
      <Link to={`/videos/${id}`}>
        <GameImage src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <p>{title}</p>
          <p>{viewCount}</p>
        </div>
      </Link>
    </GameContainer>
  )
}

export default GamingCard
