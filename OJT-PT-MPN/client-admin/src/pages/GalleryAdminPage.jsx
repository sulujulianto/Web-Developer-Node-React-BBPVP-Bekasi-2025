import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';

const GalleryAdminPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get('/api/gallery');
      setItems(data.data || data || []);
    } catch (err) {
      setError('Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await api.delete(`/api/admin/gallery/${id}`);
      load();
    } catch (err) {
      setError('Failed to delete');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-semibold text-slate-900">Gallery</h1>
          <p className="text-sm text-slate-600">Manage gallery items.</p>
        </div>
        <Link to="/gallery/new" className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-md">+ Add Item</Link>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-auto bg-white border border-slate-200 rounded-xl shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Preview</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((g) => (
                <tr key={g._id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-semibold text-slate-900">{g.title || '-'}</td>
                  <td className="px-4 py-3 text-slate-600">{g.category || '-'}</td>
                  <td className="px-4 py-3">
                    {g.imagePath ? <img src={g.imagePath} alt={g.title} className="h-12 w-16 object-cover rounded" /> : '-'}
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <Link to={`/gallery/${g._id}`} className="px-3 py-1 rounded-lg border border-primary/40 text-primary text-xs font-semibold">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(g._id)}
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

export default GalleryAdminPage;
