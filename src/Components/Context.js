import axios from 'axios';
import React, { createContext, useEffect, useState} from 'react'

export const Context = createContext();

const ContextProvider = (props) => {
   
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://backend-dummy-test.herokuapp.com/api/v1/employee").then((res)=>
       setData(res.data) )
    })


 
        return (
            <>
              <Context.Provider value={[data]}>

                  {props.children}

              </Context.Provider>
            
            </>
        )
    }

export default ContextProvider