import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskWindow from'./components/taskWindow.js';
import Header from './components/header.js';
import Search from './components/search.js';
import Button from './components/button.js';
import SelectBox from './components/arrangeby.js';


class App extends Component {
  state={show:false};
  showModal=()=>{
    this.setState(
      (prevState)=>({
        show:!prevState.show     
      })
    );
  };
  render() {
    return (
      <div className="App">
        
        <Header newtask={this.showModal}/>
        <SelectBox/>
        <TaskWindow show={this.state.show}/>
      </div>
    );
  }
}

export default App;
