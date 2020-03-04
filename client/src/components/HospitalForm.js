import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
//import '../Form.css'

class HospitalForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Basic Details' style={styles.centerText} />
          <div style={styles.center}>
            <TextField
              hintText='Enter date'
              floatingLabelText='Date'
              onChange={handleChange("date")}
              defaultValue={values.date}
            />
            <br />
            <TextField
              hintText='Enter time'
              floatingLabelText='Time'
              onChange={handleChange("time")}
              defaultValue={values.time}
            />
            <br />
            <TextField
              hintText='Enter Hospital Name'
              floatingLabelText='Hospital Name'
              onChange={handleChange("hospitalName")}
              defaultValue={values.hospitalName}
            />
            <br />
            <RaisedButton
              label='Continue'
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
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

export default HospitalForm;
