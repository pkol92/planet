import React, { FC, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization/context';
import { Result } from '../PlanetsData/component';

interface Props {
  data: Result,
}

const Table: FC<Props> = ( {data} ) => {
  let navigate = useNavigate();
  const auth = useContext(AuthContext);


  const handleLogout = () => {
    auth.signout(() => navigate("/"));
  }
    
  return (
      <div className='tablePage'>
        <button className='logoutButton' onClick={handleLogout}>Sign out</button>
        <table className='table'>
          <thead>
            <tr>
            <th>Name</th>
            <th>Body Type</th>
            <th>Flattening</th>
            <th>Density</th>
            <th>Gravity</th>
          </tr>
          </thead>
          <tbody>
            {data.bodies?.map((item) => 
          <tr key={item.id}>
            <td>{item.englishName}</td>
            <td>{item.bodyType}</td> 
            <td>{item.escape}</td>  
            <td>{item.density}</td>
            <td>{item.gravity}</td>
          </tr>)}
          </tbody>
        </table>
      </div>

  )
}

export default Table;