import React from 'react'
// @ts-ignore
import clip from "../img/clip.svg"
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <input type="file" style={{display: "none"}} id="file " />
        <label htmlFor="file">
          <img src={clip} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input