// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notfoundcontainer">
    <Header />
    <div className="imagecont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="homeimage"
      />
      <h1 className="lost">Lost Your Way?</h1>
      <p className="losttext">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
