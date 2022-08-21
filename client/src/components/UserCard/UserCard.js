import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  const { index, Date, Event, FullName, email, _id } = props?.myevent;
  return (
    <tr>
      <td>{FullName}</td>
      <td>{Event}</td>
      <td>{Date}</td>
      <td>{email}</td>
      <td>
        <p className="">
        <i
          className="fas fa-trash mx-auto dlt"
          onClick={() => {
            window.confirm("Are you sure you want to delete this Event?") &&
              props?.handleDelete(_id);
          }}
        ></i>
        </p>
      </td>
      <td>
        <p className="">
        <i
     
          className="fas fa-pen mx-auto"
        ></i>
        </p>
      </td>
    </tr>
  );
};

export default UserCard;
