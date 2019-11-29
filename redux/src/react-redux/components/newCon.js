

import {connect} from "react-redux"
import {Button} from "antd-mobile"
import { countAdd, countDesc, changeCity, todoCity } from "../actions";


// 新的 容器组件  ES7  装饰器

// 类 装饰器  只能写在 class 前面   修饰对面的后面的 类 class
//  会把 元数据   装载对应的 class 里面 
@connect(  
    (state)=>{   // mapStateToProps
        console.log(state,'state-state-state');
        return {
            ...state,
            num:state.count+9000000,
            city1:state.city + "-what city",
        }
    },
    (dispatch)=>{
        return {
            add:n=>dispatch(countAdd(n)),
            desc:n=>dispatch(countDesc(n)),
            changeCity:city=>dispatch(changeCity(city)),
            change:()=>dispatch(todoCity())
        }
    }
)
export default class NewCon extends Component{
    render(){
        console.log(this.props);
        const {
            count,
            city,
            num,
            city1,
            add,
            desc,
            changeCity,
            change
        } = this.props;
        return (
            <div>
                <h2> count   == {count }  /  {num }</h2>
                <h2> city    == {city }  /  {city1 }</h2>
                <Button inline type="primary" onClick={()=>add(10000)}>count add 10000 </Button>
                <Button inline type="primary" onClick={()=>desc(100)}>count desc 100 </Button>
                <Button inline type="warning" onClick={()=>changeCity('我喜欢 深圳....')}>我喜欢 深圳....</Button>
                <Button inline type="warning" onClick={change}>todo city </Button>
            </div>
        )
    }
}