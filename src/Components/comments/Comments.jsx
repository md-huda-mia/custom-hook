import React from "react";
import SingleCom from "../singleComm/SingleCom";
import CustomHook from "../../custom/Hooks/CustomHook";

const Comments = () => {
  const { data, loading, error } = CustomHook(
    "https://jsonplaceholder.typicode.com/comments"
  );
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <h3>Comments section</h3>
      <div className="commnets_container">
        {data?.slice(0, 10).map((comment, index) => (
          <SingleCom key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
