import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `text-sm font-semibold px-3 py-2 rounded-lg ${
    isActive ? 'text-primary bg-white shadow-sm' : 'text-slate-700 hover:text-primary'
  }`;

const Navbar = () => (
  <header className="bg-white/90 backdrop-blur border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-display font-bold">
          MPN
        </div>
        <div className="leading-tight">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">PT MPN</p>
          <p className="text-slate-600 text-sm">Training & Development</p>
        </div>
      </Link>
      <nav className="flex items-center gap-2">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          Services
        </NavLink>
        <NavLink to="/trainings" className={linkClass}>
          Trainings
        </NavLink>
        <NavLink to="/team" className={linkClass}>
          Team
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Navbar;
