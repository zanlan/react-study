import { CHANGEWORD, GETMVASYNC } from "../actions";

const defaultState = {
    word:"12121212!!!",
    mv:[],
    types:[]
}

export const data = (state=defaultState,action)=>{
    switch(action.type){

        case CHANGEWORD:
        return {...state,word:action.word};  // 返回新的数据 
        break;
        case "changeWordAsync":
        return {...state,word:action.word};
        break;

        case GETMVASYNC:
        return {...state,mv:action.mv}
        break;

        case "changeMvAsync":
        return {...state,mv:action.mv}
        break;

        case "getTypesAsync":
        return {...state,types:action.types}
        break;

        
        default:
        return state;
        break;
    }
}