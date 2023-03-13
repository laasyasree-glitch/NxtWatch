import {AiOutlineLike, AiFillLike} from 'react-icons/ai'

const LikeStatus = props => {
  const {isActive, toggleActiveLikeStatus} = props
  const starImageURL = isActive ? <AiFillLike /> : <AiOutlineLike />

  const onClickStar = () => {
    toggleActiveLikeStatus()
  }

  return (
    <div>
      <p>Like</p>
      <button type="button" onClick={onClickStar}>
        {starImageURL}
      </button>
    </div>
  )
}

export default LikeStatus
