import React from "react";
import SingleCom from "../singleComm/SingleCom";
import CustomHook from "../../custom/Hooks/CustomHook";

const Comments = () => {
  const { data, loading, error } = CustomHook(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return (
    <div>
      <h2>All Comments</h2>
      <div className="commnets_container">
        {data?.slice(0, 10).map((comment, index) => (
          <SingleCom key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
