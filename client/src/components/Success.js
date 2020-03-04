import React, { useState } from "react";
import Web3 from "web3";
import { HelloAbi } from "./HelloAbi.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";


const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0xF16a6b02eB8eF6B0d3FCdE9EE7b773A3F14751f0"; //Contract Address
const HelloContract = new web3.eth.Contract(HelloAbi, contractAddress);




class Success extends Component {

  componentDidMount() {
    
  }
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values: {date,
      time,
      hospitalName,
      id,
      firstName,
      lastName,
      age,
      contact,
      bloodGroup,
      visitReason,
      newPatient} } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Success' />
          <h1>Thank you for your submission</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}



export default Success;

import React, { useState } from "react";
import Web3 from "web3";
import { HelloAbi } from "./HelloAbi.js";



const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0xF16a6b02eB8eF6B0d3FCdE9EE7b773A3F14751f0"; //Contract Address
const HelloContract = new web3.eth.Contract(HelloAbi, contractAddress);


function App() {
  const [greeting, setGreeting] = useState(0);

  const setData = async e => {
    // console.log(greeting);
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    console.log(accounts)
    const account = accounts[0];
    console.log(account)
    const gas = await HelloContract.methods.setGreeting(greeting).estimateGas();
    const result = await HelloContract.methods
      .setGreeting(greeting)
      .send({ from: account, gas });
    console.log(result);
  };

  const getData = async e => {
    e.preventDefault();
    const result = await HelloContract.methods.getGreeting().call();
    const length = await HelloContract.methods.getLength().call();
    for(let i = length-1; i>=0; i--)
    {
      const element = await HelloContract.methods.getElement(i).call();
      console.log(element);
    }

    console.log(result);
    console.log(length);
    console.log(typeof result)
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

