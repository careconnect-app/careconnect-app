"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowResize from "@/hooks/useWindowResize";
import useIsSsr from "@/hooks/useIsSsr";
import Spinner from "@/components/Core/Spinner";
import Navbar from "@/components/Navbar/Navbar";

const MainView = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isSsr = useIsSsr();

  const width = useWindowResize();
  const isMobile = width[0] < 768;
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      {isSsr ? (
        <Spinner />
      ) : (
        <div
          className={`main-page-container ${
            isSidebarCollapsed ? "collapsed" : ""
          }`}
        >
          <div className="side-menu-container">
            <aside>
              <Sidebar
                isSidebarCollapsed={isSidebarCollapsed}
                toggleSidebar={toggleSidebar}
              />
            </aside>
          </div>
          <div className="main-content-right">
            <div className="header">
              <Navbar />
            </div>
            <main className="main-content-container">
              <div className="main-content">{children}</div>
            </main>
            <footer className="footer-container">
              <p>
                Contact: <b>madbala@careconnect.in</b>
              </p>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default MainView;
