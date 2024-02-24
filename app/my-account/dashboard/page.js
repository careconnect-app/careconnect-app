import Notice from "@/components/CardNotice/Notice";
import OverviewCards from "@/components/Cards/OverviewCards";
import React from "react";
const Dashboard = () => {
  return (
    <div className="content">
      <div className="dashboard-overview-cards-section">
        <OverviewCards />
      </div>
      <div style={{display:"flex"}}>
      <div className="dashboard-overview-notice-section">
        <Notice />
      </div>
      <div className="dashboard-overview-notice-section">
        <Notice />
      </div>
      <div className="dashboard-overview-notice-section">
        <Notice />
      </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
