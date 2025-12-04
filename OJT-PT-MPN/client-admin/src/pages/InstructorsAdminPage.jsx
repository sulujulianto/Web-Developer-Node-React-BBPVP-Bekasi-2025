import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';

const InstructorsAdminPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get('/api/instructors');
      setItems(data.data || data || []);
    } catch (err) {
      setError('Failed to load instructors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this instructor?')) return;
    try {
      await api.delete(`/api/admin/instructors/${id}`);
      load();
    } catch (err) {
      setError('Failed to delete');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-semibold text-slate-900">Instructors</h1>
          <p className="text-sm text-slate-600">Manage instructors.</p>
        </div>
        <Link to="/instructors/new" className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-md">+ Add Instructor</Link>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-auto bg-white border border-slate-200 rounded-xl shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Expertise</th>
                <th className="px-4 py-3 text-left">Photo</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((i) => (
                <tr key={i._id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-semibold text-slate-900">{i.name}</td>
                  <td className="px-4 py-3 text-slate-600">{i.title || '-'}</td>
                  <td className="px-4 py-3 text-slate-600">{Array.isArray(i.expertise) ? i.expertise.join(', ') : ''}</td>
                  <td className="px-4 py-3">{i.photoPath ? <img src={i.photoPath} alt={i.name} className="h-12 w-12 object-cover rounded-full" /> : '-'}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <Link to={`/instructors/${i._id}`} className="px-3 py-1 rounded-lg border border-primary/40 text-primary text-xs font-semibold">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(i._id)}
                      className="px-3 py-1 rounded-lg border border-red-200 text-red-600 text-xs font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InstructorsAdminPage;
