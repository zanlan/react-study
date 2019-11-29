

import {connect} from "react-redux";
import {Button} from "antd-mobile"
import { countAdd, countDesc, changeCity, changeWord, deleteSay } from "../actions";
@connect(
    state=>{
        console.log(state.toJS(),'state');
        return {
            data:state.get("data"),
            count:state.getIn(["data","count"]),
            city:state.getIn(['data','city']),
            word:state.getIn(['data','word']),
            say:state.getIn(['my','say'])
        }
    }   
)
export default class ImmutableDemo extends Component{
    change=()=>{
        this.props.dispatch(changeWord(this.inp.value));
    }
    render(){
        console.log(this.props);
        const {
            data,
            count,
            city,
            word,
            say,
            dispatch
        } = this.props;
        
        return (
            <div>
                <h2> count === {data.get("count")}  /  {count}  </h2>
                <h2> city  === {data.get("city")}  /  {city}  </h2>
                <h2> word === {word}  ///   </h2>
                {say&&<h2>{say}</h2>}
                <hr/>
                <Button inline type="warning"  onClick={()=>dispatch(countAdd())} >count add</Button>
                <Button inline type="warning"  onClick={()=>dispatch(countDesc(80))} >count desc 80</Button>
                <Button inline type="warning"  onClick={()=>dispatch(changeCity('我想去 qwe...'))} > 我想去 21212.</Button>
                <p> <input type="text" value={word}  ref={el=>this.inp=el}  onChange={this.change} /></p>
                <Button inline type="warning"  onClick={()=>dispatch(deleteSay())} > 21eqweqwe </Button>
            </div>
        )
    }
}