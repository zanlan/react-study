
import {Button} from "antd-mobile"

// UI组件  子组件   UI 组件负责 UI 的呈现
export default class ReactReduxDemo extends Component{
    render(){
        console.log(this.props);
        const {
            count,
            city,
            num,
            city1,
            add,
            desc,
            changeCity
        } = this.props;
        return (
            <div>
                <h2> count   == {count }  /  {num }</h2>
                <h2> city    == {city }  /  {city1 }</h2>
                <Button inline type="primary" onClick={()=>add(50)}>count add 50 </Button>
                <Button inline type="primary" onClick={()=>desc(100)}>count desc 100 </Button>
                <Button inline type="warning" onClick={()=>changeCity('我喜欢 深圳....')}>我喜欢 深圳....</Button>
            </div>
        )
    }
}