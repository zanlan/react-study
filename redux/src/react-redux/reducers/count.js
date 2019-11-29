


export const count = (state = 2000, action)=>{
    console.log(action);
    switch(action.type){
        case "countAdd":
        return state+=action.num;
        case "countDesc":
        return state-=action.payload;
        default:
        return state;
    }
}