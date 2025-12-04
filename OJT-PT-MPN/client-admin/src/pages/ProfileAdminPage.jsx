import React, { useEffect, useState } from 'react';
import api from '../api/client';

const ProfileAdminPage = () => {
  const [profile, setProfile] = useState({
    name: '',
    description: '',
    vision: '',
    mission: '',
    address: '',
    phone: '',
    email: '',
    whatsapp: '',
    logoPath: '',
    bannerPath: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    api
      .get('/api/admin/profile')
      .then(({ data }) => {
        const p = data.data || {};
        setProfile({
          ...profile,
          ...p,
          mission: Array.isArray(p.mission) ? p.mission.join('\n') : p.mission || ''
        });
      })
      .catch(() => setStatus('Failed to load profile'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const payload = { ...profile, mission: profile.mission };
      await api.put('/api/admin/profile', payload);
      setStatus('Profile updated');
    } catch (err) {
      setStatus('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-display font-semibold text-slate-900">Company Profile</h1>
      {status && <div className="text-sm text-slate-700">{status}</div>}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Name</label>
            <input name="name" value={profile.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input name="email" value={profile.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Phone</label>
            <input name="phone" value={profile.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">WhatsApp</label>
            <input name="whatsapp" value={profile.whatsapp} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Address</label>
          <input name="address" value={profile.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Description</label>
          <textarea name="description" value={profile.description} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Vision</label>
            <textarea name="vision" value={profile.vision} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Mission (one per line)</label>
            <textarea name="mission" value={profile.mission} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Logo Path</label>
            <input name="logoPath" value={profile.logoPath} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Banner Path</label>
            <input name="bannerPath" value={profile.bannerPath} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
        </div>
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-lg bg-primary text-white font-semibold shadow-md disabled:opacity-60">
          {loading ? 'Saving…' : 'Save Profile'}
        </button>
      </form>
    </div>
  );
};

export default ProfileAdminPage;
