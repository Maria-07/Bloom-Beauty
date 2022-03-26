import React from "react";
import "./SelectItem.css";

const SelectItem = ({ item }) => {
  // console.log(item);
  const { name, img } = item;
  return (
    <div className="item">
      <img src={img} alt="img" />
      <p>{name}</p>
    </div>
  );
};

export default SelectItem;
