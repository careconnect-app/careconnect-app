import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="main-content-right">
      <div className="header">
        <Navbar />
      </div>

      <div className="main-content">{children}</div>
      <footer className="footer-container">
        <p>
         Contact: <b>madbala@careconnect.in</b>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
