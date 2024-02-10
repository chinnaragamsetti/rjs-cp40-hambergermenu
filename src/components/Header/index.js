// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose, IoMdHome} from 'react-icons/io'
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
    >
      {close => (
        <div className="popupcont">
          <IoMdClose className="popimage" onClick={() => close()} />
          <div className="subcont">
            <Link to="/" className="popcont">
              <IoMdHome className="popimage" />
              <p className="poptext">Home</p>
            </Link>
            <Link to="/about" className="popcont">
              <BsInfoCircleFill className="popimage" />

              <p className="poptext">About</p>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
