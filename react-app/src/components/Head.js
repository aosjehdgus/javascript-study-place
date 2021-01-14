import React, { Component } from 'react';
import './title.css'

class Head extends Component{
    render(){
      return(
  
        <header>

          <h1 className = "main_title"> {this.props.title} </h1>
          <h1 className = "sub_title"> {this.props.sub} </h1>
    
        </header>
  
      );
    }
  }

export default Head;
  