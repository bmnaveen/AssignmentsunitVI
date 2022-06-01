import { DISPLAYCOUNTRY } from "./action";
import {SELECTCOUNTRIES} from "./action"

const initialState={
    cities:[],
    countries:[]

}

export const displayCountryReducer=(store=initialState,{type,payload})=>{
 
   

    switch (type){

        case DISPLAYCOUNTRY:return {...store,["cities"]:payload};

        case SELECTCOUNTRIES:return {...store,["countries"]:payload};

        default : return store;

    }



}
