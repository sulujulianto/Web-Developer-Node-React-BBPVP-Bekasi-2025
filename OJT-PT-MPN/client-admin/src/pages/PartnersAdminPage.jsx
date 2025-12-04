import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';

const PartnersAdminPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get('/api/partners');
      setItems(data.data || data || []);
    } catch (err) {
      setError('Failed to load partners');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this partner?')) return;
    try {
      await api.delete(`/api/admin/partners/${id}`);
      load();
    } catch (err) {
      setError('Failed to delete');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-semibold text-slate-900">Partners</h1>
          <p className="text-sm text-slate-600">Manage partners.</p>
        </div>
        <Link to="/partners/new" className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-md">+ Add Partner</Link>
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
                <th className="px-4 py-3 text-left">Website</th>
                <th className="px-4 py-3 text-left">Logo</th>
                <th className="px-4 py-3 text-left">Active</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p._id} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-semibold text-slate-900">{p.name}</td>
                  <td className="px-4 py-3 text-slate-600">
                    {p.websiteUrl ? (
                      <a href={p.websiteUrl} className="text-primary underline" target="_blank" rel="noreferrer">
                        {p.websiteUrl}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-4 py-3">{p.logoPath ? <img src={p.logoPath} alt={p.name} className="h-10 w-14 object-contain" /> : '-'}</td>
                  <td className="px-4 py-3">{p.isActive ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <Link to={`/partners/${p._id}`} className="px-3 py-1 rounded-lg border border-primary/40 text-primary text-xs font-semibold">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(p._id)}
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

export default PartnersAdminPage;
