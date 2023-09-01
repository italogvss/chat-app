import React from 'react'
// @ts-ignore
import profile from '../img/profile.svg'
const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
          <img src={profile} alt="" />
        <div className="userChatInfo">
          <span >Cicrano</span>
          <p>Hello</p>
        </div>
      </div>
      
    </div>
  )
}

export default Chats