import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Head from './components/Head';
import Profile from './components/Subject';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {

      head:{title: "dongle's portfolio"},
      contents:[

        {id : 1, title : 'PROFILE', desc : 'Name is react'},
        {id : 2, title : 'PROJECT', desc : 'Example is react example'},
        {id : 3, title : 'ACTIVITY', desc : 'Difference is react difference'},
        {id : 4, title : 'VISION', desc : 'Difference is react difference'}

       
      ],

      subject:{title: "Profile",
               desc : "긍정적 재료로 소통하는 긍정 개발자 '안녕하세요. 저는 재료공학 출신 개발자 입니다.' "}
               

      
    }
  }
  render(){
    return (
      <div className="App">
        <Head title = {this.state.head.title} 
              sub = {this.state.head.sub}> 
        </Head>
        <TOC data = {this.state.contents}></TOC>

        <Profile title = {this.state.subject.title}
                desc = {this.state.subject.desc}>        
        </Profile>                             

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

  