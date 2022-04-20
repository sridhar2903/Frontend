import React, { useContext } from 'react'

import { Context } from './Context'
const Datatest = () => {

    const[data]=useContext(Context)
   
 


  return (
    <>
    {
        data.map((data,i)=><div key={i}>{data.name}</div>)
            
        
    }
    </>
  )
}

export default Datatest