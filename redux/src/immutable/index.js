


import ReactDOM , {render} from "react-dom";
import ImmutableDemo from "./components";
import store from "./store";
import {Provider } from "react-redux"


export default class ReactRedux extends Component{
    render(){
        return (
            <div>
                <h2> react-redux  +   immutable  == 改造 不可变对象   </h2>
                <hr/>
                <ImmutableDemo></ImmutableDemo>
            </div>
        )
    }
}

const hotRender=()=>{
    render(
        <Provider store={store}>
            <ReactRedux/>
        </Provider>
        ,
        document.getElementById("root")
    )
}

hotRender();