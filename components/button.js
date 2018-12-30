
import React, { Component } from 'react';
class Button extends Component{
    render(){
      return(
        <button className="button" onClick={this.props.onClickFunc}> + New Task </button>
      );
    }
  }
  export default Button;