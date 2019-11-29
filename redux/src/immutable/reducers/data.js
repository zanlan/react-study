
import immutable from "immutable";
const defaultState = immutable.Map({
    count:1242412,
    city:"武汉...",
    word:["122 212"]
})
export const data = (state=defaultState,action)=>{
    switch(action.type){
        case "countAdd":
        return state.update("count",v=>v+1)
        case "countDesc":
        return state.update("count",v=>v-action.payload)
        case "changeCity":
        return state.set("city",action.payload);
        case "changeWord":
        return state.set('word',action.payload);
        default:
        return state;
        break;
    }
}