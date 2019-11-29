

export const countAdd = (num)=>{
    return {
        type:"countAdd",
        num
    }
}

export function countDesc(payload){
    return {
        type:"countDesc",
        payload
    }
}

export function changeCity(city){
    return {
        type:"changeCity",
        city
    }
}


export function todoCity(){
    return {
        type:"todoCity"
    }
}