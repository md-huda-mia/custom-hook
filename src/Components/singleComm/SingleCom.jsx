import React from "react";

const SingleCom = ({ comment }) => {
  const { id, name, email, body } = comment;
  return (
    <div className="post_content">
      <span>UserId: {id}</span>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <p>{body}</p>
    </div>
  );
};

export default SingleCom;
