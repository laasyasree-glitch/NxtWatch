import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'
import LikeStatus from '../LikeStatus'
import DislikeStatus from '../DislikeStatus'
import SavedVideosContext from '../../context/SavedVideosContext'

import SideBar from '../SideBar'
import {HomeContainer, HomeContentContainer} from './styledComponents'

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
    likeStatus: false,
    dislikeStatus: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  toggleActiveLikeStatus = () =>
    this.setState(ps => ({
      likeStatus: !ps.likeStatus,
      dislikeStatus: false,
    }))

  toggleActiveDislikeStatus = () =>
    this.setState(ps => ({
      dislikeStatus: !ps.dislikeStatus,
      likeStatus: false,
    }))

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
        id: fetchedData.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: this.updateChannel(fetchedData.video_details.channel),
        view_count: fetchedData.video_details.view_count,
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
        We are having some trouble processing your request. Please try again.
      </p>
      <button type="button" onClick={this.onClickRetryButton}>
        Retry
      </button>
    </div>
  )

  renderVideosListView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {videoDetails, likeStatus, dislikeStatus} = this.state
        const {
          title,
          thumbnailUrl,
          channel,
          viewCount,
          publishedAt,
          videoUrl,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const {addCartItem} = value
        const onClickAddToCart = () => {
          addCartItem({...videoDetails})
        }
        return (
          <HomeContentContainer>
            <ReactPlayer url={videoUrl} controls />

            <img src={thumbnailUrl} alt="thumbnail_url" />
            <div>
              <img src={profileImageUrl} alt="profile" />
              <h1>{name}</h1>
            </div>
            <div>
              <p>{title}</p>
              <p>{viewCount}</p>
              <p>{publishedAt}</p>
              <p>{subscriberCount}</p>
            </div>
            <div>
              <LikeStatus
                isActive={likeStatus}
                toggleActiveLikeStatus={this.toggleActiveLikeStatus}
              />
              <DislikeStatus
                isActive={dislikeStatus}
                toggleActiveDislikeStatus={this.toggleActiveDislikeStatus}
              />
              <button
                type="button"
                className="button add-to-cart-btn"
                onClick={onClickAddToCart}
              >
                <RiMenuAddFill />
                Save
              </button>
            </div>
          </HomeContentContainer>
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
