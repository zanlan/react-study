import React, { Component } from 'react';
import Todolist from './components/Todolist';
import {p1} from './components/Eventbus';
import imgsrc from './assets/images/1.jpg'
class App extends Component {
  componentDidMount() {
    p1.emit('eventbus',{data:'传输数据--传输数据--传输数据--传输数据--传输数据--传输数据--传输数据--传输数据--传输数据--'})
  }
  render() {
    return (
      <div className="App">
        <Todolist />
        <img src="http://img3.imgtn.bdimg.com/it/u=3884173958,3732514001&fm=26&gp=0.jpg" width='100' height='100' />
        <img src={require('./assets/images/1.jpg')} width='100' height='100'/>
        <img src={imgsrc} width='100' height='100' />
      </div>
    );
  }
}

export default App;
