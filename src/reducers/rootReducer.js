import { combineReducers } from 'redux'


import auth from "./auth";
import message from "./message";
import protocol from "./protocol";


const rootReducer = combineReducers({
    auth,
    message,
    protocol,
})

export default rootReducer;
