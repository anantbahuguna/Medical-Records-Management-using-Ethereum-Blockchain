import React, { useState } from "react";
import Web3 from "web3";
import { HelloAbi } from "./HelloAbi.js";

import "./App.css";

const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0xF16a6b02eB8eF6B0d3FCdE9EE7b773A3F14751f0"; //Contract Address
const HelloContract = new web3.eth.Contract(HelloAbi, contractAddress);

function App() {
  const [greeting, setGreeting] = useState(0);

  const setData = async e => {
    console.log(greeting);
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await HelloContract.methods.setGreeting(greeting).estimateGas();
    const result = await HelloContract.methods
      .setGreeting(greeting)
      .send({ from: account, gas });
    console.log(result);
  };

  const getData = async e => {
    e.preventDefault();
    const result = await HelloContract.methods.getGreeting().call();
    // const contractAddress = "0xF16a6b02eB8eF6B0d3FCdE9EE7b773A3F14751f0";
    // web3.eth
    //   .filter({
    //     address: contractAddress,
    //     from: 1,
    //     to: "latest"
    //   })
    //   .get(function(err, result) {
    //     // callback code here
    //     console.log(result);
    //   });

    console.log(result);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={setData}>
          <label>
            Set Data:
            <input
              type='text'
              name='greeting'
              value={greeting}
              onChange={e => setGreeting(e.target.value)}
            />
          </label>
          <input type='submit' value='Set Data' />
        </form>
        <br />
        <button onClick={getData} type='button'>
          Get Data
        </button>
      </header>
    </div>
  );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// export default App;
