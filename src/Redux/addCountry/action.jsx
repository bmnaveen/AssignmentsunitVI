import axios from "axios"



export const DISPLAYCOUNTRY="DISPLAYCOUNTRY";

export const SELECTCOUNTRIES="SELECTCOUNTRIES"




export const displayCountry=(data)=>({
type:DISPLAYCOUNTRY,
payload:data
})

export const selectCountry=(data)=>({
    type:SELECTCOUNTRIES,
    payload:data
    })

export const  getCountry=()=>async (dispatch)=>{
console.log("hvchjx")
await axios.get("http://localhost:8080/cities").then((res)=>{
    dispatch(displayCountry(res.data))
}).catch((err)=>{
    console.log(err.message);
})
}


export const addCountry=(count)=> async()=>{
    console.log(count)
let assign;
 await axios.get(`http://localhost:8080/countries?namer=${count}`).then((res)=>{
   assign= res.data  
console.log(assign)
})

if(assign.length>=1){
    alert("Country already exist")
}else{
    await axios.post(`http://localhost:8080/countries`,{
        namer:count,
}).then((res)=>{
    alert("Country Created Sucessfully")
}).catch((err)=>{
    console.log(err.message);
})
}
    
}


export const  selectCountryShow=()=>async (dispatch)=>{

    await axios.get("http://localhost:8080/countries").then((res)=>{
        dispatch(selectCountry(res.data))
    }).catch((err)=>{
        console.log(err.message);
    })
    }


    export const addCity=(data)=>async(dispatch)=>{
         axios.post("http://localhost:8080/cities",{
city:data.city,
population:data.population,
country:data.country
        }).then((res)=>{
            
            alert("city created sucessfully");
            dispatch(getCountry())
            return setTimeout(() => {
                window.location.reload(false);
            }, 600);
        }).catch((err)=>{
console.log(err)
        })
    }


    export const deleteCity=(data)=>async(dispatch)=>{
       await axios.delete(`http://localhost:8080/cities/${data}`).then((res)=>{
            console.log(res);
            alert("city deleted sucessfully");
            dispatch(getCountry())
        }).catch((err)=>{
            console.log(err);
        })
    }


    export const updateCity=(id,data)=>async(dispatch)=>{
        await axios.patch(`http://localhost:8080/cities/${id}`,{
            city:data.city,
            population:data.population,
            country:data.counrty
        }).then((res)=>{
             console.log(res);
             alert("city updated sucessfully");
             dispatch(getCountry())
         }).catch((err)=>{
             console.log(err);
         })

     }

    