import React, { PropTypes } from 'react';

const TableRow = ({ employee }) => {
  return (
    <tr>
       <td>{employee.FirstName}</td>
      <td>{employee.LastName}</td>
      <td>{employee.Title}</td>
      <td>{employee.ProductsSold}</td>
      <td>{employee.Referal}</td>
    </tr>
  );
};

TableRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default TableRow;
