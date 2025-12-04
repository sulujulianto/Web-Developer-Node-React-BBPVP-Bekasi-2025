import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const Layout = ({ children }) => {
  const { admin, logout } = useAuth();

  return (
    <div className="min-h-screen bg-sand">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-display font-semibold">MPN</div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Admin</p>
              <p className="text-slate-600 text-sm">Content Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="text-right">
              <p className="font-semibold text-slate-900">{admin?.name || 'Admin'}</p>
              <p className="text-slate-500">{admin?.email}</p>
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
      <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
};

export default Layout;
