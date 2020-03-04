import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";


class Confirm extends Component {
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
          <AppBar title='Confirm Medical Record' style={styles.centerText} />
          <div style={styles.center}>
          <List>
              <ListItem 
                primaryText="Date"
                secondaryText={ date }
              />
              <ListItem 
                primaryText="Time"
                secondaryText={ time }
              />
              <ListItem 
                primaryText="Hospital"
                secondaryText={ hospitalName }
              />
              <ListItem 
                primaryText="First Name"
                secondaryText={ firstName }
              />
              <ListItem 
                primaryText="Last Name"
                secondaryText={ lastName }
              />
              <ListItem 
                primaryText="Age"
                secondaryText={ age }
              />
              <ListItem 
                primaryText="Contact"
                secondaryText={ contact }
              />
              <ListItem 
                primaryText="Blood Group"
                secondaryText={ bloodGroup }
              />
              <ListItem 
                primaryText="Visit Reason"
                secondaryText={ visitReason }
              />
              <ListItem 
                primaryText="Is New Patient"
                secondaryText={ newPatient }
              />
          </List>
          <RaisedButton label='Confirm' primary={true} style={styles.button} 
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

export default Confirm;
