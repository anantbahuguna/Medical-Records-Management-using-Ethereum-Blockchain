import React, { Component } from "react";
import HospitalForm from './HospitalForm'
import PatientBasicForm from './PatientBasicForm'
import PatientMedicalForm from "./PatientMedicalForm";
import Confirm from "./Confirm";
import Success from "./Success"
const uuid4 = require("uuid/v4");

class MultiForm extends Component {
  state = {
    step: 1,
    date: "",
    time: "",
    hospitalName: "",
    id: uuid4(),
    firstName: "",
    lastName: "",
    age: 0,
    contact: "",
    bloodGroup: "",
    visitReason: "",
    newPatient: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      date,
      time,
      hospitalName,
      id,
      firstName,
      lastName,
      age,
      contact,
      bloodGroup,
      visitReason,
      newPatient
    } = this.state;
    const values = {date,
        time,
        hospitalName,
        id,
        firstName,
        lastName,
        age,
        contact,
        bloodGroup,
        visitReason,
        newPatient}
    
    switch(step) {
        case 1:
            return (
              <HospitalForm 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            )
        case 2:
          return (
            <PatientBasicForm 
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                handleChange={this.handleChange}
                values={values}
              />
          )
        case 3:
          return (
            <PatientMedicalForm 
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
            />
          )
        case 4:
          return (
            <Confirm 
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                values={values}
                />
          )
        case 5:
          return (
            <Success />
          )
    }
  }
}

export default MultiForm;
