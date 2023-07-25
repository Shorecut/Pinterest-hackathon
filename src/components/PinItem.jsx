import React from "react";
import "../card.css";

const PinItem = ({ item, pinSize }) => {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={item.image} alt="" className="mainPic" />

      <div className="content">
        <h3>{item.title}</h3>
        <div className="search">
          <a>
            <img
              src="https://www.svgrepo.com/show/533627/arrow-square-right.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PinItem;
