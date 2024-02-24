import React from "react";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";

const DetailCard = ({ ...item }) => {
  const { name, iconurl } = item;
  return (
    <div className="card">
      <div className="card-image">
        <span className="icon">{iconurl}</span>
      </div>

      <div className="card-content">
        <div className="sub-content">
          <p className="title">{name}</p>
          <div className="datas">
            <span className="value">241</span>
            <span className="percent">
              <IoMdArrowUp /> <b>4%</b>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DetailCard;
