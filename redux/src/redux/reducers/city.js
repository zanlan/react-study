import { CHANGECITY } from "../actions";

export const city = (state='默认值',action)=>{
    switch(action.type){
        case CHANGECITY:
        return action.city;
        default:
        return state;
    }
}