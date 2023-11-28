import React from "react";

const Post = ({ post }) => {
  console.log(post);
  const { title, body, id } = post;
  return (
    <div className="post_content">
      <span>postId: {id}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
