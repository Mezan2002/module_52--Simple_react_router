import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { body, title, id } = post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`posts/${id}`}>Post Id: {id}</Link>
    </div>
  );
};

export default Post;
