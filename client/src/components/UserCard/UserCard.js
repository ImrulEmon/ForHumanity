import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
 const{index,Date,Event,FullName,email,_id}=props?.myevent;
  return (
    <tr>
      
      <td>{FullName}</td>
      <td>{Event}</td>
      <td>{Date}</td>
      <td>{email}</td>
      <td><i className="fas fa-trash"></i></td>
    </tr>
  );
};

export default UserCard;
