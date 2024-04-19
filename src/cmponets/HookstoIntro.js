import React, { useContext } from 'react'
import { DataContext } from '../App';

const HookstoIntro = () => {
    const data = useContext(DataContext);
  return (
    <div>
      {data} on hook intro!
    </div>
  )
}

export default HookstoIntro
