import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
//class code 

class App extends Component {
  constructor() {
    super();
    this.state = {
      "monsters": [],
      "searchField" : ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(response => this.setState({"monsters" : response}));
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monster" handleChange={e => this.setState({'searchField': e.target.value})  }/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       "name" : "Ajeet Chauhan"
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Click on Button to Change Below Text.
//           </p>
//           <p>{ this.state.name }</p>
//           <button onClick={() => this.setState({'name' : "Ajeet Singh Chauhan"})}>Click Me</button>
//         </header>
//       </div>
//     );
//   }
//}

// functional code
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

export default App;
