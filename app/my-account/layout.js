import MainView from "@/components/Main/Main.View";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="full-page-container">
        <MainView children={children}/>
      </div>
    </>
  );
};

export default Layout;
