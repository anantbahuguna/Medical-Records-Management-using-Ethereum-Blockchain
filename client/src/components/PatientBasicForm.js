import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


class PatientBasicForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Patient Details' style={styles.centerText}/>
          <div style={styles.center}>

          
          <TextField
            hintText='Enter first name'
            floatingLabelText='First Name'
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText='Enter last name'
            floatingLabelText='Last Name'
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText='Enter Age'
            floatingLabelText='Age'
            onChange={handleChange("age")}
            defaultValue={values.age}
          />
          <br />
          <TextField
            hintText='Enter Contact No.'
            floatingLabelText='Contact'
            onChange={handleChange("contact")}
            defaultValue={values.contact}
          />
          <br />
          <RaisedButton label='Continue' primary={true} style={styles.button} 
          onClick={this.continue} />
          <RaisedButton label='Back' primary={false} style={styles.button} 
          onClick={this.back} />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  centerText: {
    textAlign: "center",
    margin: "auto"
  },
  center: {
    margin: "auto",
    width: "30%",
    padding: "20px"
  }
};

export default PatientBasicForm;
