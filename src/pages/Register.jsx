import React from 'react'
import add from "../img/add-image.svg"
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <form>
          <span className="logo">Chat App</span>
          <span className="title">Register</span>
          <input type='text' placeholder='Nome'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Senha'/>
          <input className='fileInput' type='file' id="file" placeholder='Arquivo'/>
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        <p>You do have a account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Register