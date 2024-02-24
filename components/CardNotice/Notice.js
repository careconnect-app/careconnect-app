import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSwapBag, GiTakeMyMoney ,GiMagicBroom } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { FaAngleDown, FaCalendarAlt } from "react-icons/fa";
import { CiViewList, CiStethoscope } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiToilet } from "react-icons/pi";


import NoticeCard from "@/components/CardNotice/NoticeCard";

const Notice = () => {
  const data = [
    {
      name: "Room 101 cleaning",
      iconurl: <GiMagicBroom />,
      reportBy: "Balaguru",
      time: "5 min ago",
    },
    {
      name: "Leave Applied",
      iconurl: <AiOutlineUser />,
      reportBy: "Balaguru",
      time: "6 min ago",
    },
    {
      name: "New Washroom",
      iconurl: <PiToilet />,
      reportBy: "Balaguru",
      time: "7 min ago",
    },
    {
      name: "Bill report Missing",
      iconurl: <GiTakeMyMoney />,
      reportBy: "Balaguru",
      time: "8 min ago",
    },
  ];
  return (
    <div>
      <div className="heading-notice-container">
        <p className="heading">Hospital Report</p>
        <div className="notice-container">
          <FaCalendarAlt />
          <span className="title">Last 30 days</span>
          <FaAngleDown />
        </div>
      </div>
      <div className="container-list">
        {data.map((item) => (
          <NoticeCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Notice;
