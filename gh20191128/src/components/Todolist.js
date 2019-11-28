import React, { Component } from 'react';
import { p1 } from './Eventbus';
import styles from './index.module.css';
import  './index.css'
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
    }
    render() {
        return (
            <div className={`bos ${styles['boss']}`}>
                <input ref="username" value={this.state.username} onChange={this.inputChange} />
                <div className={styles.box}>张亮</div>
            </div>
        );
    }
}

export default Todolist;