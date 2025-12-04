import React from 'react';

const TeamPage = () => {
  const members = [
    { name: 'A. Rahman', title: 'Lead Facilitator', bio: 'Expert in leadership and change.' },
    { name: 'Siti Lestari', title: 'Learning Designer', bio: 'Designs engaging learning journeys.' },
    { name: 'Budi Santoso', title: 'Data & Digital', bio: 'Drives analytics and digital adoption.' }
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      <h1 className="text-3xl font-display font-bold text-slate-900">Tim Kami</h1>
      <p className="text-slate-700">Tim fasilitator dan konsultan yang siap mendampingi organisasi Anda.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.name} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-display font-semibold text-slate-900">{m.name}</h3>
            <p className="text-sm text-slate-500">{m.title}</p>
            <p className="text-sm text-slate-700 mt-2">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
