// export from 

// action 
export const countDesc = {
    type:"countDesc",
    count:100
}

export const INCREMENT = "increment";


export function increment(num){
    return {
        type:INCREMENT,
        num
    }
}

export const DECREMENT = "decrement"
export const decrement = (payload)=>{
    return {
        type:DECREMENT,
        payload
    }
}

export const ADD = "COUNTADDDDDDDDDDDDD"
export function add(){
    return {
        type:ADD,
    }
}

export const CHANGECITY = "changeCity"
export function changeCity(city){
    return {
        type:CHANGECITY,
        city
    }
}
export const CHANGEMSG = "CHANGEMSG";
export const changeMsg = msg=>(
    {
        type:CHANGEMSG,
        msg
    }
)

// ()=>{return obj}
// ()=>obj 

export const CHANGEWORD = "CHANGEWORD";
export const changeWord = word=>(
    {
        type:CHANGEWORD,
        word
    }
)

import {axios} from "&";

// 所有的异步 写在 action 
export const changeWordAsync = ()=>{
    return axios.get("/react/index").then(res=>{
        // 操作成功时候发 送  action  
        return {
            type:"changeWordAsync",
            word:res.data
        }
    })
}


export const GETMVASYNC = "getMvAsync";
export function getMvAsync({url,params,cb}){
    return axios.get(url,{params})
    .then(res=>{
        cb();
        return {
            type:GETMVASYNC,
            mv:res.data.result
        }
    })
}

// async + await   ES7  

// async 表明 这个函数(变量)是个 Promise对象  
// await 表示获取 Promise 操作后的结果  (then?catch)
export async function changeMvAsync({url,params}){
    const res = await axios.get(url,params);
    return {
        type:"changeMvAsync",
        mv:res.data.result
    }
}

export async function getTypesAsync({url}){
    const res = await axios.get(url);
    return {
        type:"getTypesAsync",
        types:res.data.result
    }
}



