
import immutable from "immutable"

const defaultState = immutable.fromJS({
    say:"eqweqw!",

})
export const my = (state=defaultState,action)=>{
    switch(action.type){
        case "deleteSay":
        return state.delete("say");
        default:
        return state;
    }
}