import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [posts, setposts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //   posts data fetching
        const postsData = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postResult = await postsData.json();
        setposts(postResult);

        //   comments data fetching
        const commentData = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const comData = await commentData.json();
        setComments(comData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return { posts, comments };
};

export default Hooks;
