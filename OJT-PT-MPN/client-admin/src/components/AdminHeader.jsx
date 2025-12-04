import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="md:hidden">
          <Link to="/dashboard" className="text-sm font-semibold text-primary">Dashboard</Link>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="text-right">
            <p className="font-semibold text-slate-900">{user?.username || 'Admin'}</p>
            <p className="text-slate-500">{user?.role}</p>
          </div>
          <button
            onClick={logout}
            className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
