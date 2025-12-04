import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/client';

const InstructorFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isCreate = id === 'new';
  const [form, setForm] = useState({ name: '', title: '', bio: '', expertise: '' });
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isCreate) return;
    api
      .get('/api/instructors')
      .then(({ data }) => {
        const list = data.data || data || [];
        const item = list.find((i) => i._id === id);
        if (item) {
          setForm({
            name: item.name || '',
            title: item.title || '',
            bio: item.bio || '',
            expertise: Array.isArray(item.expertise) ? item.expertise.join(', ') : ''
          });
        }
      })
      .catch(() => setError('Failed to load instructor'));
  }, [id, isCreate]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') setPhoto(files[0]);
    else setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (k === 'expertise') {
          fd.append(k, v);
        } else {
          fd.append(k, v);
        }
      });
      if (photo) fd.append('photo', photo);

      if (isCreate) {
        await api.post('/api/admin/instructors', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await api.put(`/api/admin/instructors/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
      navigate('/instructors');
    } catch (err) {
      setError('Failed to save instructor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-display font-semibold text-slate-900">{isCreate ? 'Add' : 'Edit'} Instructor</h1>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Title</label>
            <input name="title" value={form.title} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Bio</label>
          <textarea name="bio" value={form.bio} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Expertise (comma separated)</label>
          <input name="expertise" value={form.expertise} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Photo</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
          {!isCreate && !photo && <p className="text-xs text-slate-500">Keep existing photo if none selected.</p>}
        </div>
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-lg bg-primary text-white font-semibold shadow-md disabled:opacity-60">
          {loading ? 'Saving…' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default InstructorFormPage;
