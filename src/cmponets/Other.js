import React, { useContext } from 'react'
import { DataContext } from '../App';

const Other = () => {
    const data = useContext(DataContext);
  return (
    <div>
      <h2>{data}other js</h2>
    </div>
  )
}

export default Other
