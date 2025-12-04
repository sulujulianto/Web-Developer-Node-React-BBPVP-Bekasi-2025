import React, { useEffect, useState } from 'react';

const emptyState = {
  title: '',
  summary: '',
  description: '',
  category: '',
  level: '',
  price: '',
  duration: '',
  startDate: '',
  endDate: '',
  location: '',
  tags: '',
  published: true,
  image: null
};

const TrainingForm = ({ onSave, selected }) => {
  const [form, setForm] = useState(emptyState);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (selected) {
      setForm({
        ...emptyState,
        ...selected,
        price: selected.price || '',
        startDate: selected.startDate ? selected.startDate.substring(0, 10) : '',
        endDate: selected.endDate ? selected.endDate.substring(0, 10) : '',
        tags: selected.tags?.join(', ')
      });
      setPreview(selected.imageUrl || '');
    } else {
      setForm(emptyState);
      setPreview('');
    }
  }, [selected]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      setForm((f) => ({ ...f, image: file }));
      setPreview(file ? URL.createObjectURL(file) : '');
    } else if (type === 'checkbox') {
      setForm((f) => ({ ...f, [name]: checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{selected ? 'Edit program' : 'New program'}</p>
          <h3 className="text-xl font-display font-semibold">Training details</h3>
        </div>
        {selected && (
          <button className="text-sm text-primary underline" onClick={() => onSave(null)}>Clear</button>
        )}
      </div>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Category</label>
          <input name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Summary</label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Level</label>
          <input name="level" value={form.level} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Location</label>
          <input name="location" value={form.location} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Price (IDR)</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Duration</label>
          <input name="duration" value={form.duration} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Start date</label>
          <input name="startDate" type="date" value={form.startDate} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">End date</label>
          <input name="endDate" type="date" value={form.endDate} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Tags (comma separated)</label>
          <input name="tags" value={form.tags} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Cover image</label>
          <input name="image" type="file" accept="image/*" onChange={handleChange} className="w-full" />
          {preview && <img src={preview} alt="Preview" className="h-28 w-full object-cover rounded-xl border border-slate-200" />}
        </div>
        <div className="flex items-center gap-3">
          <input
            id="published"
            name="published"
            type="checkbox"
            checked={form.published}
            onChange={handleChange}
            className="h-4 w-4 text-primary"
          />
          <label htmlFor="published" className="text-sm font-semibold text-slate-700">
            Published
          </label>
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition"
          >
            {selected ? 'Update program' : 'Create program'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainingForm;
