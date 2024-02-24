import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSwapBag, GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { FaAngleDown, FaCalendarAlt } from "react-icons/fa";
import { CiViewList, CiStethoscope } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";

import DetailCard from "./DetailCard";

const OverviewCards = () => {
  const data = [
    {
      name: "Doctors",
      iconurl: <CiStethoscope />,
    },
    {
      name: "Patients",
      iconurl: <AiOutlineUser />,
    },
    {
      name: "Staffs",
      iconurl: <FaPeopleGroup />,
    },
    {
      name: "Revenue",
      iconurl: <GiTakeMyMoney />,
    },
    // {
    //   name: "Earnings",
    //   iconurl: <GiReceiveMoney />,
    // },
  ];
  return (
    <div>
      <div className="heading-calender-container">
        <p className="heading">Statics</p>
        <div className="calender-container">
          <FaCalendarAlt />
          <span className="title">Last 30 days</span>
          <FaAngleDown />
        </div>
      </div>
      <div className="cards-container-list">
        {data.map((item) => (
          <DetailCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default OverviewCards;
