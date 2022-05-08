import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization/context';

//API https://api.le-systeme-solaire.net/en/

interface Result {
  bodies?: [Planet],
}

interface Planet {
  id: string,
  englishName: string,
  escape: number,
  bodyType: string,
  density: number,
  gravity: number,
}

const Table = () => {
  const [result, setResult] = useState<Result>({});
  let navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchingItems = await fetch("https://api.le-systeme-solaire.net/rest/bodies/?data=id,englishName,escape,bodyType,density,gravity");
        const data = await fetchingItems.json();

        setResult(data);
      } catch (err) {
          console.log(err);
      }
      };

    fetchItems();
    
  }, []);

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
            {result.bodies?.map((item) => 
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

export default Table