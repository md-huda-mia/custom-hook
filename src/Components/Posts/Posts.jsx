import React from "react";
import SinglePost from "../singlePost/singlePost";
import CustomHook from "../../custom/Hooks/CustomHook";
import "./Post.css";

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
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
