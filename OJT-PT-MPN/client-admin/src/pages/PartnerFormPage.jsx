import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';

const PartnerFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isCreate = id === 'new';
  const [form, setForm] = useState({ name: '', websiteUrl: '', isActive: true });
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isCreate) return;
    api
      .get('/api/partners')
      .then(({ data }) => {
        const list = data.data || data || [];
        const item = list.find((p) => p._id === id);
        if (item) {
          setForm({ name: item.name || '', websiteUrl: item.websiteUrl || '', isActive: item.isActive !== false });
        }
      })
      .catch(() => setError('Failed to load partner'));
  }, [id, isCreate]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') setLogo(files[0]);
    else if (type === 'checkbox') setForm((f) => ({ ...f, [name]: checked }));
    else setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (logo) fd.append('logo', logo);

      if (isCreate) {
        await api.post('/api/admin/partners', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/api/admin/partners/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/partners');
    } catch (err) {
      setError('Failed to save partner');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-display font-semibold text-slate-900">{isCreate ? 'Add' : 'Edit'} Partner</h1>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Website URL</label>
          <input name="websiteUrl" value={form.websiteUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Logo</label>
          <input type="file" name="logo" accept="image/*" onChange={handleChange} />
          {!isCreate && !logo && <p className="text-xs text-slate-500">Keep existing logo if none selected.</p>}
        </div>
        <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
          <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} className="h-4 w-4" /> Active
        </label>
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-lg bg-primary text-white font-semibold shadow-md disabled:opacity-60">
          {loading ? 'Saving…' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default PartnerFormPage;
