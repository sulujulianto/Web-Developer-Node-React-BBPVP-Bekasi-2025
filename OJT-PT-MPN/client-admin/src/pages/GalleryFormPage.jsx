import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';

const GalleryFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isCreate = id === 'new';
  const [form, setForm] = useState({ title: '', description: '', category: '' });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isCreate) return;
    api
      .get('/api/gallery')
      .then(({ data }) => {
        const list = data.data || data || [];
        const item = list.find((g) => g._id === id);
        if (item) {
          setForm({ title: item.title || '', description: item.description || '', category: item.category || '' });
        }
      })
      .catch(() => setError('Failed to load item'));
  }, [id, isCreate]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') setImage(files[0]);
    else setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (image) fd.append('image', image);

      if (isCreate) {
        await api.post('/api/admin/gallery', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/api/admin/gallery/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/gallery');
    } catch (err) {
      setError('Failed to save item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-display font-semibold text-slate-900">{isCreate ? 'Add' : 'Edit'} Gallery Item</h1>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Title</label>
          <input name="title" value={form.title} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Category</label>
          <input name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
          {!isCreate && !image && <p className="text-xs text-slate-500">Keep existing image if none selected.</p>}
        </div>
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-lg bg-primary text-white font-semibold shadow-md disabled:opacity-60">
          {loading ? 'Saving…' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default GalleryFormPage;
