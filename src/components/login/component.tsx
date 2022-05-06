import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`login: ${user} , password: ${password} `)
  }

  return (
    <div className='Login'>
        <label htmlFor="login"><b>Username</b></label>
        <input type='text' placeholder='username' name='login' value={user} onChange={(e)=> setUser(e.target.value)}></input>

        <label htmlFor="password"><b>Password</b></label>
        <input type='password' placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

        <button className='Button' onClick={handleLogin}>Log in</button>
    </div>
  )
}

// Login.propTypes = {}

export default Login;
