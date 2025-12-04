import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';

const ServiceFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [form, setForm] = useState({ title: '', slug: '', shortDescription: '', description: '', isActive: true });
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    api
      .get('/api/services/admin')
      .then(({ data }) => {
        const item = (data.data || []).find((s) => s._id === id);
        if (item) {
          setForm({
            title: item.title || '',
            slug: item.slug || '',
            shortDescription: item.shortDescription || '',
            description: item.description || '',
            isActive: item.isActive !== false
          });
        }
      })
      .catch(() => setError('Failed to load service'));
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') setIcon(files[0]);
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
      if (icon) fd.append('icon', icon);

      if (isEdit) {
        await api.put(`/api/services/admin/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.post('/api/services/admin', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/services');
    } catch (err) {
      setError('Failed to save service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-display font-semibold text-slate-900">{isEdit ? 'Edit' : 'New'} Service</h1>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Title</label>
            <input name="title" value={form.title} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Slug</label>
            <input name="slug" value={form.slug} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Short Description</label>
          <textarea name="shortDescription" value={form.shortDescription} onChange={handleChange} rows="2" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Icon</label>
          <input type="file" name="icon" accept="image/*" onChange={handleChange} />
        </div>
        <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
          <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} className="h-4 w-4" /> Active
        </label>
        <div>
          <button type="submit" disabled={loading} className="px-5 py-3 rounded-lg bg-primary text-white font-semibold shadow-md disabled:opacity-60">
            {loading ? 'Saving…' : 'Save Service'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceFormPage;
