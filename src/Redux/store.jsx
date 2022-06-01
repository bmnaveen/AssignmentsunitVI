import {legacy_createStore as createStore} from "redux";
import { combineReducers } from "redux";
import { displayCountryReducer } from "./addCountry/reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"
const rootReducer=combineReducers({
    country:displayCountryReducer,
})

export const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
)

