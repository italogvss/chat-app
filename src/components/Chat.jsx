import React from 'react'
// @ts-ignore
import addProfile from '../img/add-profile.svg'
// @ts-ignore
import dots from "../img/dots.svg";
import Messages from './Messages';
import Input from './Input';
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">         
          <img src={addProfile} alt="" />         
          <img src={dots} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat