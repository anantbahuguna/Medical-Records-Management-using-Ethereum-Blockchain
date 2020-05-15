import React, { Component } from "react";
import Web3 from "web3";
import { HelloAbi } from "./HelloAbi.js";
import Form from './components/Form'
import Table from "./components/Table.js";


const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0xF16a6b02eB8eF6B0d3FCdE9EE7b773A3F14751f0"; //Contract Address
const HelloContract = new web3.eth.Contract(HelloAbi, contractAddress);



class Main extends Component {
  state = {
    step: 1,
    date: "",
    name: "",
    age: "",
    contact: "",
    visitReason: "",
    isEmergency: "No",
    data: []
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step+1
    })
  }
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step:step-1
    })
  }
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  setData = async e => {
        // console.log(greeting);
        e.preventDefault();
        const {date,name,age,contact,visitReason,isEmergency} = this.state;
        console.log( date)
        const accounts = await window.ethereum.enable();
        console.log(accounts)
        const account = accounts[0];
        console.log(account)
        const gas = await HelloContract.methods.setRecord(date,name,age,contact,visitReason,isEmergency).estimateGas();
        
        const result = await HelloContract.methods
          .setRecord(date,name,age,contact,visitReason,isEmergency)
          .send({ from: account, gas });
        console.log(result);
      };
    getData = async e => {   
     // e.preventDefault();  
            // const result = await HelloContract.methods.getGreeting().call();
            const length = await HelloContract.methods.getLength().call();
            this.setState({
              data: [
                
              ]
            })
            for(let i = length-1; i>=0; i--)
            {
              const element = await HelloContract.methods.getRecord(i).call();
              this.setState({
                data: this.state.data.concat([element])
              })
             // console.log(element);
            }
            console.log("data",this.state.data)
            this.nextStep();
          };


  render() {
    const { step,date,
    name,
    age,
    contact,
    visitReason,
  isEmergency,data } = this.state;
    
      switch(step) {
        case 1: 
          return (
            <Form 
            handleChange={this.handleChange}
            setData={this.setData}
            getData={this.getData}
            nextStep={this.nextStep}
          />
          )
        case 2:
          return (
            <Table 
            data={data}
            prevStep={this.prevStep}/>
          )
      }
     
  }
}

export default Main


// function App() {
//   const [greeting, setGreeting] = useState(0);

//   const setData = async e => {
//     // console.log(greeting);
//     e.preventDefault();
//     const accounts = await window.ethereum.enable();
//     console.log(accounts)
//     const account = accounts[0];
//     console.log(account)
//     const gas = await HelloContract.methods.setGreeting(greeting).estimateGas();
//     const result = await HelloContract.methods
//       .setGreeting(greeting)
//       .send({ from: account, gas });
//     console.log(result);
//   };

//   const getData = async e => {
//     e.preventDefault();
//     const result = await HelloContract.methods.getGreeting().call();
//     const length = await HelloContract.methods.getLength().call();
//     for(let i = length-1; i>=0; i--)
//     {
//       const element = await HelloContract.methods.getElement(i).call();
//       console.log(element);
//     }


//     // const contractAddress = "0xF16a6b02eB8eF6B0d3FCdE9EE7b773A3F14751f0";
//     // web3.eth
//     //   .filter({
//     //     address: contractAddress,
//     //     from: 1,
//     //     to: "latest"
//     //   })
//     //   .get(function(err, result) {
//     //     // callback code here
//     //     console.log(result);
//     //   });

//     console.log(result);
//     console.log(length);
//     console.log(typeof result)
//   };

//   return (
//     <div className='App container'>
//       <header className='App-header'>
//         <Form></Form>

        
//         <form onSubmit={setData}>
//           <label>
//             Set Data:
//             <input
//               type='text'
//               name='greeting'
//               value={greeting}
//               onChange={e => setGreeting(e.target.value)}
//             />
//           </label>
//           <input type='submit' value='Set Data' />
//         </form>
//         <br />
//         <button onClick={getData} type='button'>
//           Get Data
//         </button>
        
//       </header>
//     </div>
//   );
// }

// export default App;

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
