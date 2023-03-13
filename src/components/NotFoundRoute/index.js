import Header from '../Header'

const NotFoundRoute = () => (
  <div>
    <Header />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found.</p>
    </div>
  </div>
)

export default NotFoundRoute
