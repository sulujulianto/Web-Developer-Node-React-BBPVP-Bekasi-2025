import React, { useEffect, useState } from 'react';
import { getProfile } from '../api/publicApi';

const AboutPage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile).catch(() => {});
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      <h1 className="text-3xl font-display font-bold text-slate-900">Tentang Kami</h1>
      <p className="text-slate-700 leading-relaxed">
        {profile?.description || 'We build capability through learning and human capital development.'}
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-display font-semibold text-slate-900">Visi</h3>
          <p className="text-slate-700 mt-2">{profile?.vision || 'Enable resilient, high-performing teams.'}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-xl font-display font-semibold text-slate-900">Misi</h3>
          <ul className="text-slate-700 mt-2 space-y-2 list-disc list-inside">
            {(profile?.mission || ['Deliver relevant training', 'Drive measurable outcomes']).map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
