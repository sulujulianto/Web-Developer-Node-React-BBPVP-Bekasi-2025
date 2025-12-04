import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';

const TestimonialFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isCreate = id === 'new';
  const [form, setForm] = useState({ name: '', company: '', message: '', isActive: true });
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isCreate) return;
    api
      .get('/api/testimonials')
      .then(({ data }) => {
        const list = data.data || data || [];
        const item = list.find((t) => t._id === id);
        if (item) {
          setForm({ name: item.name || '', company: item.company || '', message: item.message || '', isActive: item.isActive !== false });
        }
      })
      .catch(() => setError('Failed to load testimonial'));
  }, [id, isCreate]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') setPhoto(files[0]);
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
      if (photo) fd.append('photo', photo);

      if (isCreate) {
        await api.post('/api/admin/testimonials', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/api/admin/testimonials/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/testimonials');
    } catch (err) {
      setError('Failed to save testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-display font-semibold text-slate-900">{isCreate ? 'Add' : 'Edit'} Testimonial</h1>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Company</label>
            <input name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Photo</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
          {!isCreate && !photo && <p className="text-xs text-slate-500">Keep existing photo if none selected.</p>}
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

export default TestimonialFormPage;
