// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';

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
//           Learn React with vijay narola
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import './App.css'
import Form from './Form'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Form />
			</div>
		)
	}
}

export default App
