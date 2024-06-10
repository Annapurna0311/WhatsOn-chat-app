import React from 'react'

const Message = () => {
  return (
    <div  className='message owner'>
     <div className='messageInfo'>
      <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''/>
      <span> just now</span>
     </div>
     <div className='messageContent'>
      <p>Hello</p>
      {/* <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''/> */}
     </div>
    </div>
  )
}

export default Message
