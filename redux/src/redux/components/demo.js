

import store from "../store";
import {Button} from "antd-mobile"
import {axios} from "&"
import { countDesc, increment, changeCity, changeMsg, getTypesAsync,changeWord,changeWordAsync,getMvAsync, changeMvAsync } from "../actions";
export default  class DemoView extends Component{
    change=()=>{
        store.dispatch(changeWord(this.one.value));
    }
    changeMsg=()=>{
        axios.get("/vue/index").then(res=>{
            store.dispatch(changeMsg(res.data))
        })
    }
    getmv=()=>{
        // store.dispatch(getMvAsync({
        //     url:"/vue/movie",
        //     params:{
        //         limit:12
        //     },
        //     cb:()=>{
        //         console.log("跳转... ")
        //     }
        // }))

        store.dispatch(changeMvAsync({
            url:"/vue/movie"
        }))
    }

    get=()=>{
        store.dispatch(getTypesAsync({url:"/vue/getGoodTypes"}))
    }
    render(){
        console.log(this.props);
        const {
            state,
            count,
            city,
            desc,
            add,
            msg,
            data:{
                word,
                mv,
                types
            }
        } = this.props;
        const myState = store.getState();
        
        return (
            <div>
                <h2> count === {state.count} / {count}  / {myState.count  + 1000 }</h2>
                <h2> city == {state.city} / {city}  </h2>
                {/* <h2> msg == {msg}</h2> */}
                <h2> word == {word}</h2>
                <hr/>
                <Button onClick={()=>store.dispatch({type:"COUNTADD"})} type="primary" inline> count add </Button>
                <Button onClick={()=>store.dispatch(countDesc)} type="primary" inline> count desc  </Button>
                <Button onClick={()=>store.dispatch(increment(40))} type="warning" inline> increment 10  </Button>
                <Button onClick={()=>desc(50)} type="warning" inline> decrement 5  </Button>
                <Button onClick={add} type="warning" inline> add todo   </Button>
                <Button onClick={()=>store.dispatch(changeCity('我想去...'))} type="warning" inline> qeqweweqwe  </Button>
                <Button onClick={()=>store.dispatch(changeMsg(' 天道酬勤'))} type="primary" inline> qeweqweqwe    </Button>
                <p><input type="text" ref={el=>this.one=el} onChange={this.change}/></p>
                <Button onClick={()=>store.dispatch(changeWordAsync())} type="primary" inline> eqweqwe   </Button>
                <Button onClick={this.changeMsg} type="primary" inline> eqweqw   </Button>
                <Button onClick={this.getmv} type="primary" inline>eqweqw   </Button>
                <Button onClick={this.get} type="primary" inline>eqeqwq    </Button>
                {
                    mv.map((m,i)=>{
                        return <p key={i}  > {m.title} / {m.year} </p>
                    })
                }
                {
                    types.map((t,i)=>{
                        return <p key={i}  > {t.value} / {t.text} </p>
                    })
                }
            </div>
        )
    }
}