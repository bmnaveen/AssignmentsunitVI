import React, { useState } from 'react'
import {addCountry} from "../Redux/addCountry/action"
import { useDispatch } from 'react-redux';
const AddCountry = () => {
  const [country,setCountry]=useState("");
  const dispatch=useDispatch()
  return <div>
    <h1>Add Country</h1>
    <input onChange={(e)=>{
      setCountry(e.target.value)
    }} type="text" />
    <br />
    <button onClick={()=>{
      if(country.length<=0){
return alert("Empty fields")
      }
  dispatch(addCountry(country) )
    }}>Create</button>
  </div>
    
  
}

export default AddCountry