import React from "react";
import CustomHook from "../../custom/Hooks/CustomHook";
import SingleUser from "./SingleUser";

const Users = () => {
  const { data } = CustomHook("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2>All users</h2>
      <div className="post_container">
        {data?.map((user) => (
          <SingleUser user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
