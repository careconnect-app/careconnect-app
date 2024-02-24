"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowResize from "@/hooks/useWindowResize";
const MainView = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const width = useWindowResize();
  const isMobile = width[0] < 768;
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  console.log("@width", width, width[0]);
  console.log("@ismobile", isMobile);
  return (
    <div className="full-page-container">
      <div
        className={`main-page-container ${
          isSidebarCollapsed ? "collapsed" : ""
        }`}
      >
        {!isMobile && (
          <div className="side-menu-container">
            <aside>
              <Sidebar
                isSidebarCollapsed={isSidebarCollapsed}
                toggleSidebar={toggleSidebar}
              />
            </aside>
          </div>
        )}

        <main className="main-content-container">{children}</main>
      </div>
    </div>
  );
};

export default MainView;
