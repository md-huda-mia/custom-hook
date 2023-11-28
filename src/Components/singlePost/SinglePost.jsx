import React from "react";
import "./SinglePost.css";

const SinglePost = ({ post }) => {
  const { title, userId, id, body } = post;
  return (
    <div>
      <div className="post_content">
        <span>UserId: {id}</span>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
