import React from 'react';

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-display font-bold text-slate-900">Dashboard</h1>
      <p className="text-slate-700">Welcome back. Use the menu to manage content.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {[['Services', 'Manage offerings'], ['Trainings', 'Update programs'], ['Contacts', 'View incoming leads']].map(([title, desc]) => (
          <div key={title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-display font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
