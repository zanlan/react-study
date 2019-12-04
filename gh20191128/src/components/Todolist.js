import React, { Component } from 'react';
import { p1 } from './Eventbus';
import style from './indexqwe.css';
import './index.css'
import obj from './1.js'
import { z, j } from './2.js'
var obj1=require('./1')
class Todolist extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: "张亮"
        };
    }
    inputChange = (e) => {
        console.log(this)
        // 获取dom，this.refs.username.value
        this.setState({
            username: e.target.value
        })
    }
    componentDidMount() {
        p1.on('eventbus', (val) => {
            console.log(val, '接受')
        })
        console.log(obj,'1111111')
        console.log(obj1,'2222222')
        console.log({z,j},'3333333')
    }
    render() {
        return (
            <div className={`bos ${style.boss}`}>
                <input ref="username" value={this.state.username} onChange={this.inputChange} />
                <div className={style.box}>张亮</div>
            </div>
        );
    }
}

export default Todolist;