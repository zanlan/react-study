


// reducers 拆分和合并 

import {combineReducers } from "redux";
import { count } from "./count";
import { city } from "./city";
import { msg } from "./msg";
import { data } from "./data";

export const reducers = combineReducers({
    count:count,
    city:city,
    myCity:city,
    msg,
    data:data
})


