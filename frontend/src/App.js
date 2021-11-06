import React , { Component } from 'react';
import "./App.css"
import {connect, sendMsg} from './api'
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    connect();
  }

  send(){
    console.log("hello");
    sendMsg("hello");
  }

  render(){
    return (
      <div className="App">
        <button onclick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
