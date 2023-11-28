import React from "react";
import CustomHook from "../../custom/Hooks/CustomHook";
import PhotoCard from "../Photoscard/PhotoCard";

const Photos = () => {
  const { data, loading, error } = CustomHook("https://dummyjson.com/products");
  const allPhones = data?.products;
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="photo_container">
      {allPhones?.slice(5, 15)?.map((photo) => (
        <PhotoCard photo={photo} />
      ))}
    </div>
  );
};

export default Photos;
