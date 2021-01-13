import React, {Component} from 'react';

class Subject extends Component{
    render(){
        return(

            <div>
                <h1>{this.props.title}</h1>
                <h5>{this.props.desc}</h5>
                    

            </div>

        );
    }
}

export default Subject;
