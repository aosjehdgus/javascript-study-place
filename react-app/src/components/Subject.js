import React, { Component } from 'react';

class Subject extends Component{
    render(){
      return(
  
        <section>

          <h2>{this.props.title}</h2>

          <p> {this.props.desc}</p>

        </section>
  
      );
    }
  }

export default Subject;
  