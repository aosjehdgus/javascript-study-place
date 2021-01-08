import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Head from './components/Head';
import Contents from './components/Contents';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {

      head:{title: 'React', sub : 'For UI'},
      contents:[
        {id:1, title:'concept', desc:'1'},
        {id:2, title:'example', desc:'2'},
        {id:3, title:'difference', desc:'3'},
      ]

    }
    }
  render(){
    return (
      <div className="App">
        <Head title = {this.state.head.title} 
              sub = {this.state.head.sub}> 
        </Head>
        <TOC data = {this.state.contents}></TOC>
      </div>
    );
  }
}

export default App;

 {/* <TOC> </TOC>
        <Contents title = "HTML" desc = "HTML is HyperText Markup Language."></Contents> */}

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

  