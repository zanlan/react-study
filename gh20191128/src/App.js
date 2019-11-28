import React, { Component } from 'react';
import Todolist from './components/Todolist';
import {p1} from './components/Eventbus';
import imgsrc from './assets/images/1.jpg'
class App extends Component {
  componentDidMount() {
    p1.emit('eventbus',{data:'传输数据'})
  }
  render() {
    return (
      <div className="App">
        <Todolist />
        <img src="http://img3.imgtn.bdimg.com/it/u=3884173958,3732514001&fm=26&gp=0.jpg" />
        <img src={require('./assets/images/logo.svg')} />
        <img src={imgsrc} />
      </div>
    );
  }
}

export default App;
