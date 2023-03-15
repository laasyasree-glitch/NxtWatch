import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from 'react-icons/ai'

import Header from '../Header'
import SavedVideosContext from '../../context/SavedVideosContext'

import SideBar from '../SideBar'
import {
  HomeContainer,
  VideoItemDetailsContainer,
  Video,
  ChannelLogo,
  TopContent,
  TopSubOne,
  ButtonsStatus,
  BottomContainer,
  CustomButton,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  updateChannel = obj => ({
    name: obj.name,
    profileImageUrl: obj.profile_image_url,
    subscriberCount: obj.subscriber_count,
  })

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const res = await fetch(apiUrl, options)
    if (res.ok) {
      const fetchedData = await res.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: this.updateChannel(fetchedData.video_details.channel),
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetryButton = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.{' '}
      </p>
      <button type="button" onClick={this.onClickRetryButton}>
        Retry
      </button>
    </div>
  )

  renderVideosListView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {videoDetails} = this.state
        const {
          id,
          title,
          channel,
          viewCount,
          publishedAt,
          videoUrl,
          description,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const {
          likeStatus,
          dislikeStatus,
          toggleActiveLikeStatus,
          toggleActiveDislikeStatus,
          saveStatus,
          toggleSaveButton,
        } = value

        const starImageURL1 = likeStatus ? <AiFillLike /> : <AiOutlineLike />
        const starImageURL2 = dislikeStatus ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )
        const onClickSaveButton = () => {
          toggleSaveButton(videoDetails)
        }
        const formatDate = formatDistanceToNow(new Date(publishedAt))
        return (
          <VideoItemDetailsContainer key={id}>
            <Video>
              <ReactPlayer
                width="100%"
                className="video"
                url={videoUrl}
                controls
              />
            </Video>

            <TopContent>
              <TopSubOne>
                <p>{title}</p>
                <div>
                  <span>
                    {viewCount} views{'   '}-
                  </span>
                  <span>
                    {'   '}
                    {formatDate.split(' ').splice(1).join(' ')} ago
                  </span>
                </div>
              </TopSubOne>

              <ButtonsStatus>
                <CustomButton
                  isActive={likeStatus}
                  onClick={toggleActiveLikeStatus}
                >
                  Like
                  {starImageURL1}
                </CustomButton>
                <CustomButton
                  isActive={dislikeStatus}
                  onClick={toggleActiveDislikeStatus}
                >
                  Dislike
                  {starImageURL2}
                </CustomButton>

                <CustomButton
                  type="button"
                  isActive={saveStatus}
                  onClick={() => {
                    onClickSaveButton()
                  }}
                >
                  <MdPlaylistAdd className="like-icon" />
                  {saveStatus ? 'Saved' : 'Save'}
                </CustomButton>
              </ButtonsStatus>
            </TopContent>
            <hr width="100%" />
            <BottomContainer>
              <ChannelLogo src={profileImageUrl} alt="profile" />
              <div>
                <h1>{name}</h1>
                <p>{subscriberCount} subscribers</p>
              </div>
            </BottomContainer>
            <div>
              <p>{description}</p>
            </div>
          </VideoItemDetailsContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              <Header />
              <HomeContainer
                darkMode={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <SideBar />
                {this.renderAllVideos()}
              </HomeContainer>
            </div>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
