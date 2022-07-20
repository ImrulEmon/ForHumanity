import React from "react";
import { useTabtitle } from '../../hooks/useTabtitle';

const Admin = () => {
  useTabtitle('Admin')
  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Admin
      </h1>
    </div>
  );
};

export default Admin;
