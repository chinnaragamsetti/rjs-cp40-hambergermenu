// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headercont">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <GiHamburgerMenu
          className="humicon"
          data-testid="hamburgerIconButton"
        />
      }
      className="popup-content"
    >
      {close => (
        <div className="popupcont">
          <div className="crossimagecont">
            <IoMdClose
              className="crossimage"
              testid="closeButton"
              onClick={() => close()}
            />
          </div>
          <ul className="subcont">
            <li>
              <Link to="/" className="popcont">
                <AiFillHome className="popimage" />
                <p className="poptext">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="popcont">
                <BsInfoCircleFill className="popimage" />
                <p className="poptext">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
