import React, { useEffect, useState } from 'react';
import { createTraining, deleteTraining, fetchTrainings, updateTraining } from '../api/client.js';
import TrainingForm from '../components/TrainingForm.jsx';
import TrainingList from '../components/TrainingList.jsx';

const Trainings = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchTrainings();
      setItems(data);
    } catch (err) {
      setError('Failed to load trainings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (payload) => {
    if (!payload) {
      setSelected(null);
      return;
    }
    try {
      if (selected) {
        await updateTraining(selected._id, payload);
      } else {
        await createTraining(payload);
      }
      setSelected(null);
      await load();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to save');
    }
  };

  const handleDelete = async (id) => {
    const ok = window.confirm('Delete this training?');
    if (!ok) return;
    try {
      await deleteTraining(id);
      await load();
    } catch (err) {
      setError('Failed to delete training');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Content</p>
          <h1 className="text-2xl font-display font-semibold text-slate-900">Training programs</h1>
          <p className="text-sm text-slate-600">Create, publish, and update your offerings.</p>
        </div>
      </div>

      {error && <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</div>}

      <TrainingForm onSave={handleSave} selected={selected} />

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-semibold text-slate-900">Current programs</h3>
          <div className="text-sm text-slate-500">{items.length} items</div>
        </div>
        {loading ? <div className="text-slate-600 text-sm">Loading…</div> : <TrainingList items={items} onEdit={setSelected} onDelete={handleDelete} />}
      </div>
    </div>
  );
};

export default Trainings;
