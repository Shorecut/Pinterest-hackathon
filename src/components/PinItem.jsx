import React from "react";

const PinItem = ({ item }) => {
  return (
    <div>
      <div>{item.title}</div>
      <img src={item.image} />
      <div>{item.category}</div>
    </div>
  );
};

export default PinItem;
