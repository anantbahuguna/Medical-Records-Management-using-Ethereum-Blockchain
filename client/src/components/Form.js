import React, { Component } from "react";

class Form extends Component {
  render() {
      const { handleChange, setData,getData } = this.props;
    return (
        <div className='columns is-flex is-vcentered is-centered'>
        <div className='column is-three-quarters-mobile is-two-thirds-tablet is-two-thirds-desktop'>
            <br/><br/>
      <div className='box'>
      <div className='field'>
          <label className='label'>Date</label>
          <div className='control'>
            <input className='input' type='date' placeholder='Text input' 
            onChange={handleChange("date")}/>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Name</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Enter Name' 
            onChange={handleChange("name")}/>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Age</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Enter age' 
            onChange={handleChange("age")}/>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Contact Number</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Text input' 
            onChange={handleChange("contact")}/>
          </div>
        </div>

        

        

        <div className='field'>
          <label className='label'>Emergency</label>
          <div className='control'>
            <div className='select'>
              <select onChange={handleChange("isEmergency")}>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Visit Reason</label>
          <div className='control'>
            <textarea className='textarea' placeholder='Enter visit reason' 
            onChange={handleChange("visitReason")}/>
          </div>
        </div>

        

        <div className='field'>
          <div className='control'>
            <label className='radio'>
              <input type='radio' name='question' />
              Yes
            </label>
            <label className='radio'>
              <input type='radio' name='question' />
              No
            </label>
          </div>
        </div>

        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link'
            onClick={setData}>SET DATA</button>
          </div>
          <div className='control'>
            <button className='button is-link is-light' onClick={getData}>GET DATA</button>
          </div>
        </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default Form;
