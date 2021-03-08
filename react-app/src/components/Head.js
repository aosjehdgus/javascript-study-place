import React, { Component } from 'react';
import './title.css'

class Head extends Component{
    render(){
      return(
  
        <header>

          <h1 className = "main_title"><a href="/"> {this.props.title}</a> </h1>
          <h1 className = "sub_title"><a href="/"> {this.props.sub} </a></h1>
    
        </header>
  
      );
    }
  }

export default Head;
  