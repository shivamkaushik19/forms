import React from 'react';
import Sidedashboard from './Sidedashboard';
import { Outlet } from 'react-router-dom';
import './Sidedashboard.css';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidedashboard />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
