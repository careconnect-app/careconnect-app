"use client";
import React, { useState } from "react";
// import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiViewList, CiStethoscope } from "react-icons/ci";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosGitBranch } from "react-icons/io";
import { GiMedicines } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { BsArrowsCollapseVertical } from "react-icons/bs";
import {  IoChevronDown } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";



import { FiLogOut, FiSettings } from "react-icons/fi";
// import { sideBarData } from "@/public/static/sidebarData";

const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
  const router = usePathname();
  const sideBarData = [
    {
      name: "Dashboard",
      path: "/my-account/dashboard",
      icon: true,
      iconurl: <AiOutlineDashboard />,
    },
    {
      name: "Doctor",
      path: "/my-account/products",
      icon: true,
      iconurl: <CiStethoscope />,
    },
    {
      name: "Patient",
      path: "/my-account/orders",
      icon: true,
      iconurl: <AiOutlineUser />,
      subMenu: [
        {
          name: "Add Patient",
          path: "/my-account/add-patient",
          icon: true,
          iconurl: <AiOutlineUser />,
        },
        {
          name: "Edit Patient",
          path: "/my-account/orders",
          icon: true,
          iconurl: <AiOutlineUser />,
        },
      ],
    },
    {
      name: "Department",
      path: "/my-account/settings",
      icon: true,
      iconurl: <FaRegBuilding />,
    },
    {
      name: "Appointment",
      path: "/my-account/settings",
      icon: true,
      iconurl: <IoIosGitBranch />,
    },
    {
      name: "Pharmacy",
      path: "/my-account/settings",
      icon: true,
      iconurl: <GiMedicines />,
    },
    {
      name: "Reports",
      path: "/my-account/settings",
      icon: true,
      iconurl: <TbReportAnalytics />,
    },
    {
      name: "Logout",
      path: "/",
      icon: true,
      iconurl: <FiLogOut />,
    },
  ];

  const isActiveItem = (item) => router?.includes(item.toLowerCase());

  return (
    <div className={`${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="logo-full-container">
        <Link href={"/"}>
          <div className="logo-container">
            <FaHandsHoldingChild />
            {!isSidebarCollapsed && (
              <h2 className="logo">
                <span>CareConnect</span>
              </h2>
            )}
          </div>
        </Link>
        <div className="collapse-btn" onClick={toggleSidebar}>
          <BsArrowsCollapseVertical />
        </div>
      </div>
      <ul className="list-container">
        {sideBarData &&
          sideBarData?.map((item, index) => {
            return (
              <Link href={item?.path} key={index}>
                <li
                  className={`list-item ${
                    isActiveItem(item?.name) && "active"
                  } `}
                >
                  {item?.icon ? (
                    <span className="icon">{item.iconurl}</span>
                  ) : null}
                  {!isSidebarCollapsed && (
                    <span className="list-text">{item?.name}</span>
                  )}
                  {
                  item?.subMenu?.length > 0 && (
                    <div className="sidenav-arrow">
                      <IoChevronDown/>
                    </div>
                  )
                }
                </li>
                
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
