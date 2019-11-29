

import DemoView from "./components/demo";
import store from "./store";
import ReactDOM, {render} from "react-dom";
import { decrement, add } from "./actions";
console.log(store);

const state = store.getState(); // 临时快照 执行一次

export default class ReduxDemo extends Component{
    render(){
        
        return (
            <div>
                <DemoView
                state={state}
                {...store.getState()}
                desc={n=>store.dispatch(decrement(n))}
                add={()=>store.dispatch(add())}
                ></DemoView>
            </div>
        )
    }
}



const hotRender = ()=>{
    render(
        <ReduxDemo></ReduxDemo>,
        document.getElementById('root')
    )
}

hotRender();

store.subscribe(hotRender);  // 订阅 state 每当state 改变 会重新 刷新 render 