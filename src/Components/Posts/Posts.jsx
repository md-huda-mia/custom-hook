import React from "react";
import CustomHook from "../../custom/Hooks/CustomHook";
import "./Post.css";
import Post from "../singlePost/Post";

const Posts = () => {
  const { data, loading, error } = CustomHook(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>All Posts</h2>
      <div className="single_post_container">
        {data?.slice(0, 10).map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
