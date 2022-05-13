import React, { useEffect, useState } from 'react'
import { Error } from '../Styled/component';
import TablePage from '../Table/component';
     
export interface Planet {
    id: string,
    englishName: string,
    escape: number,
    bodyType: string,
    density: number,
    gravity: number,
}

export const PlanetsData = () => {
    const [result, setResult] = useState<Planet[]>([]);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const fetchingItems = await fetch("https://api.le-systeme-solaire.net/rest/bodies/?data=id,englishName,escape,bodyType,density,gravity");
                const data = await fetchingItems.json();
                console.log(data)
                setResult(data.bodies);
                setError(false);
                console.log(result)
            } catch (err) {
                console.log(err);
                setError(true);
            }
        };
    
        fetchItems();
    }, []);
      
    return (
        <div>
           {error? <Error>Ups, something go wrong.</Error> : <TablePage data={result} ></TablePage> } 
        </div>
    )
}
