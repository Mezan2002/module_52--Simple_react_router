import React from "react";
import { useLoaderData } from "react-router-dom";
import "./PostDetalis.css";
const PostDetalis = () => {
  const postDetails = useLoaderData();
  const { title, body } = postDetails;
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Post Details Page</h2>
      <div className="postCard">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostDetalis;
