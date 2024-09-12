import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import combineReducer from "./root-reducer";

const store = configureStore({
    reducer:combineReducer,
    // middleware:()=>[logger]
})

export default store;