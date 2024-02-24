import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";



const NoticeCard = ({ ...item }) => {
  const { name, iconurl ,reportBy,time} = item;
  return (
    <div className="card">
      <div className="card-container">
      <div className="card-image">
        <span className="icon">{iconurl}</span>
      </div>

      <div className="card-content">
        <div className="sub-content">
          <p className="title">{name}</p>
          <div className="para">
            <span className="report-by">{reportBy}</span>
            <span className="time">
              <IoMdTime /> <span>{time}</span>
            </span>
          </div>
        </div>
      </div>
      </div>
      <div className="action-btn"><BsThreeDotsVertical/></div>
    </div>
  );
};

export default NoticeCard;
