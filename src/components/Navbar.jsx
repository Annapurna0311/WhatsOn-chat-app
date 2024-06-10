import React from 'react'
import Icon from '../images/icon.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>WhatsOn</span>
    <div className='user'>
      <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''/>
      <span>Annapurna</span>
      <button>Logout</button>
    </div>
    </div>
  )
}

export default Navbar
