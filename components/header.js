import React, { Component } from 'react';
import Search from './search.js';
import Button from './button.js';

class Header extends Component{
    render(){
      return(
        <div className='header d-flex'>
          <Button onClickFunc={this.props.newtask}/>
          <div className='mytodo'>My Todo</div>
          <Search/>
          </div>
      );
    }
  }
  export default Header;