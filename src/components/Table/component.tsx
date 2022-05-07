import React, { useEffect, useState } from 'react'

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
      console.log(result.bodies)
    }, []);
    
  return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Body Type</th>
            <th>Flattening</th>
            <th>Density</th>
            <th>Gravity</th>
          </tr>
          {result.bodies?.map((item) => 
          <tr>
            <td>{item.englishName}</td>
            <td>{item.bodyType}</td> 
            <td>{item.escape}</td>  
            <td>{item.density}</td>
            <td>{item.gravity}</td>
          </tr>)}
        </table>
      </div>

  )
}

export default Table