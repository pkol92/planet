import React, { FC, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authorization/context';
import { Planet } from '../PlanetsData/component';
import Table from './TableStructure';

interface Props {
  data: Planet[],
}

const TablePage: FC<Props> = ( {data} ) => {
  let navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth.signout(() => navigate("/"));
  }

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "englishName"
    },
    {
      Header: "Body type",
      accessor: "bodyType"
    },
    {
      Header: "Flattening",
      accessor: "escape"
    },
    {
      Header: "Density",
      accessor: "density"
    },
    {
      Header: "Gravity",
      accessor: "gravity"
    },
  ],[])
    
  return (
      <div className='tablePage'>
        <button className='logoutButton' onClick={handleLogout}>Sign out</button>

        <Table columns={columns} data={data}/>
      </div>

  )
}

export default TablePage;