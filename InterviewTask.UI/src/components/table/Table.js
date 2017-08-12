import React, { PropTypes } from 'react';
import TableRow from "./TableRow";

const Table = ({ employees, sortChanged, sortOrder, sortColumnName }) => {
  let rows = [];
  let tableHeaders = [];
  let tableHeaderTitles = ['First Name', 'Last Name', 'Title', 'Products Sold', 'Rrefers To'];

  if (employees.length > 0) {
    employees.forEach(function(employee) {
      rows.push(<TableRow key={employee.Id} employee={employee} />);
    });
    let index = 0;
    for (let key of Object.keys(employees[0])) {
      if (key !== 'Id') {
        tableHeaders.push(
          <th key={index} onClick={sortChanged} id={key}>{tableHeaderTitles[index]} <i
                  className={'fa ' + ((key == sortColumnName) ? ('fa-sort-' + sortOrder) : 'fa-sort')}></i></th>);
        index++;
      }
    }
  }

  return (
      <table className="table">
         <thead>
           <tr>
              {tableHeaders}
           </tr>
         </thead>
         <tbody>
           {rows}
         </tbody>
      </table>
  );
};

Table.propTypes = {
    employees: PropTypes.array.isRequired,
    sortChanged: PropTypes.func,
    sortOrder: PropTypes.string,
    sortColumnName: PropTypes.string
};

export default Table;
