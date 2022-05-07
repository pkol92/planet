import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization/context';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const hardUser = 'Astronaut';
  const hardPassword = "Planet1";
  const auth = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogin = () => {
    if ((user === hardUser) && (password === hardPassword)) {
      let newUser = {
        name: user,
        password: password,
      }

      auth.signin(newUser, ()=> navigate('../planets'));
      
      console.log(`See your planets!`, auth.user)
    } else {
      console.log('wrong login or password!', auth.user)
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

export default Login;
