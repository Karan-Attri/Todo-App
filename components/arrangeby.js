import React, { Component } from 'react';

class SelectBox extends Component{
    render(){
      return(
        <select className='selectbox'>
        <option>Arrange By</option>
        <option>Time</option>
        <option>Date</option>
  
         </select>
      );
    }
  }
  export default SelectBox;