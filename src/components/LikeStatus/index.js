import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import {LikeButton} from './styledComponents'

const LikeStatus = props => {
  const {isActive, toggleActiveLikeStatus} = props
  const starImageURL = isActive ? <AiFillLike /> : <AiOutlineLike />

  const onClickStar = () => {
    toggleActiveLikeStatus()
  }

  return (
    <div>
      <LikeButton isActive type="button" onClick={onClickStar}>
        Like
        {starImageURL}
      </LikeButton>
    </div>
  )
}

export default LikeStatus
