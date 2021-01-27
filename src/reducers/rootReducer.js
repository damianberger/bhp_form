import { combineReducers } from 'redux'


import auth from "./auth";
import message from "./message";
import protocol from "./protocol";
import activeProtocols from "./activeProtocols";


const rootReducer = combineReducers({
    auth,
    message,
    protocol,
    activeProtocols,
})

export default rootReducer;
