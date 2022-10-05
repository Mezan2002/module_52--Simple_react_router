import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, name, email, username } = user;
  return (
    <div className="userContainer">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>
        <small>
          Username: <Link to={`/users/${id}`}>{username}</Link>
        </small>
      </p>
    </div>
  );
};

export default User;
