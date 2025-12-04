import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminHeader from '../components/AdminHeader.jsx';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-sand flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
