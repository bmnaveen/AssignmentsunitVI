import { useEffect,useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { selectCountryShow,addCity } from '../Redux/addCountry/action';
const AddCity = () => {
    const dispatch=useDispatch();
    
    const countries=useSelector((store)=>store.country.countries);
    useEffect(()=>{
 dispatch(selectCountryShow());
    },[])
   

const [dater,setDater]=useState({
    country:"",
    city:"",
    population:0

})
const getValues=(e)=>{
  const  {id,value}=e.target;

setDater({
    ...dater,[id]:value
})

}


  return (
    <div>
        <h1>Add City</h1>
<form className='fireForm' action="">
    <label htmlFor=""> Country:</label>
    <br />
    <select onChange={getValues} name="" id="country">
        <option value="">Select Country</option>
       {
countries.map((x)=>{
    return <option value={x.namer}>{x.namer}</option>
})
       }
    </select>
    <br />
    <label htmlFor="">City Name:</label>
    <br />
    <input onChange={getValues} type="text" id='city' />
    <br />
    <label htmlFor="">Population:</label>
    <br />
    <input min={1} onChange={getValues} type="number" id='population' name="num" pattern="[0-9]" title="Numbers only"/>
    <br />
    <button onClick={(e)=>{
        e.preventDefault();
        for(let  x in dater){
            if(dater[x].length<=0){
                alert("empty fields")
                return;
            }
        }
       dispatch(addCity(dater)) ;
       
    }}>Submit</button>
</form>
    </div>
  )
}

export default AddCity