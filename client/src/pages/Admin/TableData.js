import React from 'react';
import './TableData.css';
const TableData = (props) => {
    const { Date, Email, Event, FullName, MobileNumber, _id } = props?.volunteer;
    return (
        <tr>
        <td>{FullName}</td>
        <td>{Event}</td>
        <td>{Date}</td>
        <td>{MobileNumber}</td>
      </tr>
    );
};

export default TableData;