import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const hardUser = 'Astronaut';
  const hardPassword = "Planet1";

  const handleLogin = () => {
    if ((user === hardUser) && (password === hardPassword)) {
      console.log(`See your planets!`)
    } else {
      console.log('wrong login or password!')
    }
    
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
