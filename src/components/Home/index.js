import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoCard from '../VideoCard'
import PrimeDealsSection from '../PrimeDealsSection'
import SearchFilter from '../SearchFilter'
import SideBar from '../SideBar'
import {
  HomeContainer,
  HomeContentContainer,
  VideosListContainer,
} from './styledComponents'

import SavedVideosContext from '../../context/SavedVideosContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
    bannerVisibility: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  channelUpdate = obj => ({
    name: obj.name,
    profileImageUrl: obj.profile_image_url,
  })

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const res = await fetch(apiUrl, options)
    if (res.ok) {
      const fetchedData = await res.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: this.channelUpdate(each.channel),
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        videosList: updatedData,
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
    this.getVideos()
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

  renderVideosListView = () => {
    const {videosList} = this.state
    const shouldShowProductsList = videosList.length > 0

    return shouldShowProductsList ? (
      <div className="all-products-container" data-testid="home">
        <VideosListContainer className="products-list">
          {videosList.map(video => (
            <VideoCard videoData={video} key={video.id} />
          ))}
        </VideosListContainer>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
          alt="no videos"
        />
        <h1>No Videos Found</h1>
      </div>
    )
  }

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

  enterSearchInput = () => {
    this.getVideos()
  }

  changeSearchInput = searchInput => {
    this.setState({searchInput})
  }

  closeBannerClicked = () => {
    this.setState({bannerVisibility: false})
  }

  render() {
    const {searchInput, bannerVisibility} = this.state
    const bannerCheck = bannerVisibility ? '' : 'hide'
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeContainer darkMode={isDarkTheme} data-testid="home">
                <SideBar />
                <HomeContentContainer>
                  <PrimeDealsSection
                    bannerCheck={bannerCheck}
                    closeBannerClicked={this.closeBannerClicked}
                  />
                  <SearchFilter
                    searchInput={searchInput}
                    changeSearchInput={this.changeSearchInput}
                    enterSearchInput={this.enterSearchInput}
                  />
                  {this.renderAllVideos()}
                </HomeContentContainer>
              </HomeContainer>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Home
