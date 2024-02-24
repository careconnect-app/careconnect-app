"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { FaShoppingBag, FaChevronDown } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline, IoChevronDown } from "react-icons/io5";

import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import useWindowResize from "@/hooks/useWindowResize";

const NavbarMain = () => {
  const router = usePathname();
  const width = useWindowResize();
  const isMobile = width[0] < 768;

  return (
    <div className="main-navbar-container">
      <div className="navbar-content">
        
        {/* <div className="navbar-menu-search-container"> */}
        {/* {isMobile && (
          <div
            className="mobile-navbar-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AiOutlineMenu />
          </div>
        )} */}
        <div className="navbar-search-container">
          <div className="search-icon">
            <IoSearchOutline />
          </div>
          <input
            placeholder="Search for Patients, Reports and more"
            className="search-input"
          />
        </div>
        {/* </div> */}

        <div className="navbar-user-sec">
          <Link href={"/wishlist"}>
            <div className="wishlist">
              <AiOutlineHeart />
            </div>
          </Link>
          <Link href={"/notification"}>
            <div className="notification">
              <IoMdNotificationsOutline />
              <span className="count-span">2</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="profile-container">
              <div className="avatar-container">
                <Image
                  src={
                    "https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/tea-gardens-munnar-cover.jpg"
                  }
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="user-details">
                <p className="user-name">Dr.BalaGuru</p>
                <span className="user-role">Admin</span>
              </div>
              <div className="drop-down">
                <IoChevronDown />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="navbar-mobile-content">
        <div className="navbar-content">
          <div className="navbar-search-container">
            <div className="search-icon">
              <IoSearchOutline />
            </div>
            <input
              placeholder="Search for Patients, Reports and more"
              className="search-input"
            />
          </div>

          <div className="navbar-user-sec">
            <Link href={"/wishlist"}>
              <div className="wishlist">
                <AiOutlineHeart />
              </div>
            </Link>
            <Link href={"/notification"}>
              <div className="notification">
                <IoMdNotificationsOutline />
                <span className="count-span">2</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="profile-container">
                <div className="avatar-container">
                  <Image
                    src={
                      "https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/tea-gardens-munnar-cover.jpg"
                    }
                    width={40}
                    height={40}
                  />
                </div>
                <div className="user-details">
                  <p className="user-name">Dr.BalaGuru</p>
                  <span className="user-role">Admin</span>
                </div>
                <div className="drop-down">
                  <IoChevronDown />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default NavbarMain;
