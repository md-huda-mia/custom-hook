import React from "react";

const SingleUser = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div>
      <div className="post_content">
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

export default SingleUser;
