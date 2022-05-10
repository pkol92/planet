import React, { useEffect, useMemo, useState } from 'react'
import Table from '../Table/component';


export interface Result {
    bodies?: [Planet],
}
      
export interface Planet {
    id: string,
    englishName: string,
    escape: number,
    bodyType: string,
    density: number,
    gravity: number,
}

export const PlanetsData = () => {
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
    }, []);
    
    const memoResult = useMemo(()=> result, [result]);
      
    return (
        <Table data={memoResult} ></Table>
    )
}
