import React from "react";

const PhotoCard = ({ photo }) => {
  const { url, title, images, thumbnail, description, price, category } = photo;
  console.log(photo);
  return (
    <div>
      <div className="single_card">
        <img src={images[3]} alt="" />
        <div className="product_info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="info">
            <span>{category}</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
