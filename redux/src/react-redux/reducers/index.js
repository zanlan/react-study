

import {combineReducers} from "redux";
import { count } from "./count";
import { city } from "./city";

export const reducers = combineReducers({
    count:count,
    city:city
})