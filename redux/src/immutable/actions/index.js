

export function countAdd(){
    return {
        type:"countAdd"
    }
}


export function countDesc(payload){
    return {
        type:"countDesc",
        payload
    }
}


export function changeCity(payload){
    return {
        type:"changeCity",
        payload
    }
}

export function changeWord(payload){
    return {
        type:"changeWord",
        payload
    }
}

export function deleteSay(){
    return {
        type:"deleteSay"
    }
}