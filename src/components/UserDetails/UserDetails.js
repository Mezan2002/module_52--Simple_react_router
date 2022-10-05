import React from "react";
import { useLoaderData } from "react-router-dom";
import "./UserDetails.css";
const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, phone, address, company } = userDetails;
  return (
    <div className="userDetailsCard">
      <h1>User Detail Page</h1>
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>City: {address.city}</p>
      <p>Works at {company.name}</p>
    </div>
  );
};

export default UserDetails;
