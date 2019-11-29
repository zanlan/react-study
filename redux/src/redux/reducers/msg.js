import { CHANGEMSG } from "../actions";


export const msg = (state=['wuhan1906daydayup'],action )=>{
    switch(action.type){

        case CHANGEMSG:
        return [...action.msg];
        break;

        default:
        return state;
        break;
    }
}