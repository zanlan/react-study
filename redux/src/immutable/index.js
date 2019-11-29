


import ReactDOM , {render} from "react-dom";
import ImmutableDemo from "./components";
import store from "./store";
import {Provider } from "react-redux"


export default class ReactRedux extends Component{
    render(){
        return (
            <div>
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