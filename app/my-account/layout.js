import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className={`overall-page-container`}>
        <div className="side-menu-container">
          <aside>
            <Sidebar />
          </aside>
        </div>
          <main className="main-content-right">
            <div className="header">
              <Navbar />
            </div>
            <div className="main-content">{children}</div>
            <footer className="footer-container">
              <p>
                Contact: <b>madbala@careconnect.in</b>
              </p>
            </footer>
          </main>
      </div>
    </>
  );
};

export default Layout;
