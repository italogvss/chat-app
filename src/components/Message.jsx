import React from 'react'

const imgUrl = new URL('../img/me.jpg', import.meta.url).href
// @ts-ignore
import profile from '../img/profile.svg'
const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={profile} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  )
}

export default Message