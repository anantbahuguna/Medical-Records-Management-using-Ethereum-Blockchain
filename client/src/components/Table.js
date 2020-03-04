import React, { Component } from "react";
const FilterableTable = require("react-filterable-table");

class Table extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { data } = this.props;

    const fields = [
      {
        name: "date",
        displayName: "Date",
        inputFilterable: true,
        sortable: true
      },
      {
        name: "name",
        displayName: "Name",
        inputFilterable: true,
        exactFilterable: true,
        sortable: false
      },
      {
        name: "age",
        displayName: "Age",
        inputFilterable: true,
        exactFilterable: true,
        sortable: false
      },
      {
        name: "contact",
        displayName: "Contact",
        inputFilterable: true,
        sortable: false
      },
      {
        name: "visitReason",
        displayName: "Visit Reason",
        inputFilterable: true,
        exactFilterable: true,
        sortable: false
      },
      {
        name: "isEmergency",
        displayName: "Emergency",
        inputFilterable: true,
        exactFilterable: true,
        sortable: false
      }
    ];
    return (
      <div className='columns is-flex is-vcentered is-centered'>
        <div className='column is-four-fifths-mobile is-four-fifths-tablet is-four-fifths-desktop'>
            <br/><br/>
          <div className='box'>
            <FilterableTable
              namespace='People'
              initialSort='name'
              data={data}
              fields={fields}
              noRecordsMessage='There are no records to display'
              noFilteredRecordsMessage='No record match your filters!'
              pageSize={2}
              pageSizes={null}
              pagersVisible={false}
            />
            <br/>
            <div className='control'>
            <button className='button is-link is-light' onClick={this.back}>Back</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
