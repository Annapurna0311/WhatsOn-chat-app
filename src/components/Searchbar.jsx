import React from 'react'

const Searchbar = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' id="text-search" placeholder='Search'/>
      </div>
      <div className='userChat'>
         <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''/>
          <div className='userChatInfo'>
             <span>wfg</span>
          </div>
      </div>
    </div>
  )
}

export default Searchbar
