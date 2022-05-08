import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization/context';

const Login = () => {
  const auth = useContext(AuthContext);
  let navigate = useNavigate();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(()=> {
    auth.user? setUser(auth.user.name) : setUser('');
    auth.user? setPassword(auth.user.password) : setPassword('');
  },[])

  const handleLogin = () => {
    if ((user === auth.hardUser.name) && (password === auth.hardUser.password)) {
      auth.signin(auth.hardUser, ()=> navigate('../planets'));
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <div className='Header'>
        <h2>Hello Astronaut! Log in to see information abut planets.</h2>
      </div>
      <div className='Login'>
        <label htmlFor="login"><b>Username</b></label>
        <input type='text' placeholder='username' name='login' value={user} onChange={(e)=> setUser(e.target.value)}></input>

        <label htmlFor="password"><b>Password</b></label>
        <input type='password' placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

        {error? <p>Wrong login or password!</p> : null}
        <button className='Button' onClick={handleLogin}>Log in</button>
      </div>
    </div>
   
  )
}

export default Login;
