import React, { useContext, useEffect }  from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './context';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    let navigate = useNavigate();

    // useEffect(() => {
    //   auth.isLocalUser();
    // },[]);
    
    if (!auth.user) {
      return <Navigate to="/"  replace />;
    }
  
    return children;
};

export default RequireAuth;
