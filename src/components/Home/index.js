import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="homecontainer">
    <Header />
    <div className="imagecont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="homeimage"
      />
    </div>
  </div>
)

export default Home
