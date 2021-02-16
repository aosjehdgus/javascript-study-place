import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Head from './components/Head';
import Subject from './components/Subject';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      head:{title: "dongle's", sub : "portfolio"},
      welcome:{title:'welcome', desc : 'Hello, React!!!'},
      contents:[

        {id : 1, title : 'Introduce', desc : 'Introduce is react'},
        {id : 2, title : 'Competency', desc : 'Competency is react example'},
        {id : 3, title : 'Skill', desc : 'Skill is react difference'},
        {id : 4, title : 'Project', desc : 'Project is react difference'},
        {id : 5, title : 'Activity', desc : 'ctivity is react difference'},
        {id : 6, title : 'Value', desc : 'alu is react difference'},

       
      ],                       
      
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){

      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }

    else if(this.state.mode === 'read'){

      _title = this.state.contents[0].title;
      _title = this.state.contents[0].desc;

    }

    return (
      <div className="App">

        {/* <Head title = {this.state.head.title} 
              sub = {this.state.head.sub}> 
        </Head> */}

        <header>

          <h1 className = "main_title"><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            
            this.setState({
              mode : 'welcome'
            });

          }.bind(this)}> {this.state.head.title} </a> 
          
          </h1>
          <h1 className = "sub_title"><a href="/"> {this.state.head.sub} </a></h1>

        </header>
        <TOC data = {this.state.contents}></TOC>
        <Subject title = {_title} desc = {_desc}></Subject>                      

      </div>
    );
  }
}

export default App;



 /* <TOC> </TOC>
<Contents title = "HTML" desc = "HTML is HyperText Markup Language."></Contents> */

// class Example_props extends Component{
//   render(){
//     return(
//       <div>
//          <h1> {this.props.title}</h1>
//           {this.props.desc}
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//     <div className = "App">
//       <Example_props title = "props" desc = "props stands for properties."></Example_props>
//       <Example_props title = "react" desc = "UI interface"></Example_props>
//     </div>
//     );
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

