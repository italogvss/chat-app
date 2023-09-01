import React from 'react'
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <form>
          <span className="logo">Chat App</span>
          <span className="title">Login</span>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Senha'/>
          <button>Sign in</button>
        <p>You don't have a account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Register