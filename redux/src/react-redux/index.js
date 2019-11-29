

import ReactDOM, {render} from "react-dom";
// import ReactReduxDemo from "./components"   // UI 
// import Container from "./components/demoCon"   // 容器 1 
import NewCon from "./components/newCon"   // 容器 2

import store from "./store"
import {Provider} from "react-redux"

export default class ReactRedux extends Component{
    render(){
        return (
            <div>
                <NewCon/>
            </div>
        )
    }
}


const hotRender = ()=>{
    render(
        <Provider store={store}>
            <ReactRedux/>
        </Provider> ,
        document.getElementById("root")
    )
}

hotRender(); 