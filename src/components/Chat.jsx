import React, { useState } from 'react'
import Cam from '../images/video.png'
import user from '../images/person.jpeg'
import Add from '../images/add-43.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
      <img src={user} id='imga' alt=''/>
        <span>Annapurna</span>
        <div className='chatIcons'>
          <img src={Cam} alt=""/>
          <img src={Add} alt=""/>
          <img src={More} alt=""/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
