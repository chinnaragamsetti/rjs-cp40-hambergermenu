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
      <p className="lost">Lost Your Way?</p>
      <p className="losttext">
        Sorry,we cant find that page.Youll find lots to explore on the home page
      </p>
    </div>
  </div>
)

export default NotFound
