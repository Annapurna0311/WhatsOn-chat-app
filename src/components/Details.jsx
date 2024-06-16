import React from 'react'
import Profile from "../images/free.jpg"
import person from '../images/person.jpeg'
import ArrowUp from "../images/up-arrow.png"
import download from "../images/download.png"
import ArrowDown from "../images/down-arrow.png"
function Details() {
  return (
    <div className='details'>
      <div className='user'>
        <img src={person} alt=''/>
        <h2>Annapurna</h2>
        <p>Lorem Ipsum is simply dummy text </p>
      </div>
      <div className='info'>
        <div className='option'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src={ArrowUp} alt=''/>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Privacy & Help</span>
            <img src={ArrowUp} alt=''/>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Share</span>
            <img src={ArrowUp} alt=''/>
          </div>
        <div className='option'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src={ArrowUp} alt=''/>
          </div>
        </div>
          <div className='photos'>
            <div className='photoItem'>
            <div className='photoDetail'>
              <img src= {Profile} alt=''/>
              <span>photo_3_2024.jpg</span>
            </div>
              <img src={download} className="icon" alt=""/>
            </div>
            <div className='photoItem'>
            <div className='photoDetail'>
              <img src= {Profile} alt=''/>
              <span>photo_3_2024.jpg</span>
            </div>
              <img src={download} className="icon" alt=""/>
            </div>
            <div className='photoItem'>
            <div className='photoDetail'>
              <img src= {Profile} alt=''/>
              <span>photo_3_2024.jpg</span>
            </div>
              <img src={download} className="icon" alt=""/>
            </div>
            <div className='photoItem'>
            <div className='photoDetail'>
              <img src= {Profile} alt=''/>
              <span>photo_3_2024.jpg</span>
            </div>
              <img src={download} className="icon"alt=""/>
            </div>
          </div>
        </div>

      <button>Block User</button>
      <button>Restrict User</button>
      </div>
    </div>
  )
}
export default Details

