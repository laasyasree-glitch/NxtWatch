import {AiOutlineDislike, AiFillDislike} from 'react-icons/ai'

import {DislikeButton} from './styledComponents'

const DislikeStatus = props => {
  const {isActive, toggleActiveDislikeStatus} = props
  const starImageURL = isActive ? <AiFillDislike /> : <AiOutlineDislike />

  const onClickStar = () => {
    toggleActiveDislikeStatus()
  }

  return (
    <div>
      <DislikeButton type="button" onClick={onClickStar}>
        Dislike
        {starImageURL}
      </DislikeButton>
    </div>
  )
}

export default DislikeStatus
