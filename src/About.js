import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const About = () => {
    const count = useSelector((state) => state.dataCounter)

  return (
    <div>
      {count.name}
    </div>
  )
}

export default About
