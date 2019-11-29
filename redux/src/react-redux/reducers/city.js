



export const city = (state = "美丽w1", action)=>{
    console.log(action);
    switch(action.type){
        case "changeCity":
        return action.city;
        case "todoCity":
        return "我想..."
        default:
        return state;
    }
}