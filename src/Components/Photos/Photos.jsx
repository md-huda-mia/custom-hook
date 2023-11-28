import React from "react";
import CustomHook from "../../custom/Hooks/CustomHook";
import PhotoCard from "../Photoscard/PhotoCard";

const Photos = () => {
  const { data } = CustomHook("https://dummyjson.com/products");
  const allPhones = data?.products;
  //   console.log(allPhones);
  return (
    <div className="photo_container">
      {allPhones?.slice(5, 15)?.map((photo) => (
        <PhotoCard photo={photo} />
      ))}
    </div>
  );
};

export default Photos;
