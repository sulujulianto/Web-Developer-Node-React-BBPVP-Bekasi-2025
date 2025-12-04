import React from 'react';
import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition ${
    isActive ? 'bg-primary text-white shadow-md' : 'text-slate-700 hover:bg-white/60'
  }`;

const AdminSidebar = () => (
  <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col p-4 gap-2">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-display font-bold">MPN</div>
      <div className="leading-tight">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Admin</p>
        <p className="text-slate-600 text-sm">Content</p>
      </div>
    </div>
    <NavLink to="/dashboard" className={linkClass} end>Dashboard</NavLink>
    <NavLink to="/services" className={linkClass}>Services</NavLink>
    <NavLink to="/trainings" className={linkClass}>Trainings</NavLink>
    <NavLink to="/contacts" className={linkClass}>Contacts</NavLink>
    <NavLink to="/profile" className={linkClass}>Profile</NavLink>
  </aside>
);

export default AdminSidebar;
