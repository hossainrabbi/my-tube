import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
