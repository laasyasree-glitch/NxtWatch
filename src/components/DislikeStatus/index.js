import {AiOutlineDislike, AiFillDislike} from 'react-icons/ai'

const DislikeStatus = props => {
  const {isActive, toggleActiveDislikeStatus} = props
  const starImageURL = isActive ? <AiFillDislike /> : <AiOutlineDislike />

  const onClickStar = () => {
    toggleActiveDislikeStatus()
  }

  return (
    <div>
      <p>Dislike</p>
      <button type="button" onClick={onClickStar}>
        {starImageURL}
      </button>
    </div>
  )
}

export default DislikeStatus
