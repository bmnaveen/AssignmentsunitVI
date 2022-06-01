import React, { useEffect, useRef, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCountry } from '../Redux/addCountry/action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {deleteCity} from "../Redux/addCountry/action"
import { selectCountryShow } from '../Redux/addCountry/action';
import { updateCity } from '../Redux/addCountry/action';

const DisplayCountry = () => {

const [prog,setProg]=useState(false);
const [csort,setCsort]=useState(true)
const [deleter,setDeleter]=useState(false);
const citie=useSelector((store)=>store.country.cities).sort((a,b)=>{
  
if(a.population>b.population) return csort ? -1 : 1
if(a.population<b.population) return csort ?  1 : -1 
return 0;
});
const dispatch=useDispatch();
const countries=useSelector((store)=>store.country.countries);
useEffect(()=>{
dispatch(selectCountryShow());
},[])
const [predefind,setPredefind]=useState({
  country:"",
  city:"",
  population:""
})
const [ider,setIder]=useState()
    useEffect(()=>{
        dispatch(getCountry())
    },[])

  useEffect(()=>{
console.log(predefind)
  },[predefind])
  const getValues=(e)=>{
    const  {id,value}=e.target;
  
    setPredefind({
      ...predefind,[id]:value
  })
  
  }
  const [empty,setEmpty]=useState("");
  return <>
    {
      prog ? <div className='editor'>
        <button onClick={()=>{
          setProg(!prog)
        }}>close</button>
        <form className='fireForm' action="">
    <label htmlFor=""> Country:</label>
    <br />
    <select defaultValue={predefind.country} onChange={getValues} name="" id="country">
        <option value="">Select Country</option>
       {
countries.map((x)=>{
    return <option value={x.namer}>{x.namer}</option>
})
       }
    </select>
    <br />
    <label  htmlFor="">City Name:</label>
    <br />
    <input  defaultValue={predefind.city} onChange={getValues} type="text" id='city' />
    <br />
    <label htmlFor="">Population:</label>
    <br />
    <input min={1}  defaultValue={predefind.population} onChange={getValues} type="number" id='population' />
    <br />
    <button onClick={(e)=>{
        e.preventDefault();
        for(let  x in predefind){
            if(predefind[x].length<=0){
                alert("empty fields")
                return;
            }
        }
       dispatch(updateCity(ider,predefind));
       setProg(!prog)
    }}>Submit</button>
</form>
      </div> : <>
      <div> <span><h3>Filter by counrty:</h3> <select onChange={(e)=>{
          setEmpty(e.target.value)
      }} name="" id="country">
        <option value="">All</option>
       {
countries.map((x)=>{
    return <option value={x.namer}>{x.namer}</option>
})
       }
    </select></span><span> <h3>Sort By Population:</h3> <button onClick={()=>{
      setCsort(!csort)
    }}>{csort<1 ? "High to low" : "Low to high"}</button></span>  </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell style={{textAlign:"center"}} align="right">City</TableCell>
            <TableCell style={{textAlign:"center"}} align="right">Country</TableCell>
            <TableCell style={{textAlign:"center"}} align="right">Population</TableCell>
            <TableCell style={{textAlign:"center"}} align="right">Edit</TableCell>
            <TableCell style={{textAlign:"center"}} align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {citie.filter((bv)=>{
           
if(empty.length<=0){
  return 1
}else if(bv.country==empty){
  return 1
}
          }).map((row,i) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell style={{textAlign:"center"}} align="right">{row.city}</TableCell>
              <TableCell style={{textAlign:"center"}} align="right">{row.country}</TableCell>
              <TableCell style={{textAlign:"center"}} align="right">{row.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</TableCell>
              <TableCell style={{textAlign:"center"}} align="right"><button className='editbut' onClick={()=>{
                setPredefind({...predefind,["country"]:row.country,["city"]:row.city,["population"]:row.population})
                setIder(row.id)
                setProg(!prog)
              }}>Edit</button></TableCell>
              <TableCell style={{textAlign:"center"}}><button className='deletbut' key={i} onClick={(e)=>{
               setDeleter(true)
             return setTimeout(() => {
                  dispatch(deleteCity(row.id));
                  setDeleter(false)
                }, 2000);
                
              }}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {
      deleter ? <div style={{ 
        backgroundImage: `url("./deleting.gif")` 
      }} className='deleter'>
      </div> : null
    }
      </>  
    }
  
</>
}

export default DisplayCountry