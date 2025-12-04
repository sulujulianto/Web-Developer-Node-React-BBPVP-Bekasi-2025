import React, { useEffect, useState } from 'react';
import api from '../api/client';

const ContactsAdminPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get('/api/contact/admin');
      setItems(data.data || []);
    } catch (err) {
      setError('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-display font-semibold text-slate-900">Contact Messages</h1>
      {error && <div className="text-sm text-red-600">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-3">
          {items.map((c) => (
            <div key={c._id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <div className="font-semibold text-slate-900">{c.name}</div>
                <div>{new Date(c.createdAt).toLocaleString()}</div>
              </div>
              <div className="text-sm text-slate-600">{c.email} {c.phone ? `· ${c.phone}` : ''}</div>
              <div className="text-slate-800 mt-2">{c.subject}</div>
              <p className="text-slate-700 mt-2 whitespace-pre-line">{c.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactsAdminPage;
