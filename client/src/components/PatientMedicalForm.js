import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


class PatientMedicalForm extends Component {
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
          <AppBar title='Enter Medical Details' style={styles.centerText}/>
          <div style={styles.center}>
          <TextField
            hintText='Enter blood group'
            floatingLabelText='Blood group'
            onChange={handleChange("bloodGroup")}
            defaultValue={values.bloodGroup}
          />
          <br />
          <TextField
            hintText='Enter visit reason'
            floatingLabelText='Visit Reason'
            onChange={handleChange("visitReason")}
            defaultValue={values.visitReason}
          />
          <br />
          <TextField
            hintText='Enter if new patient'
            floatingLabelText='New Patient or Not'
            onChange={handleChange("newPatient")}
            defaultValue={values.newPatient}
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

export default PatientMedicalForm;
