import React, { useState, useEffect } from 'react';
import { getProfile, submitContact } from '../api/publicApi';

const ContactPage = () => {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    getProfile().then(setProfile).catch(() => {});
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      await submitContact(form);
      setStatus('Pesan terkirim!');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus('Gagal mengirim pesan');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-display font-bold text-slate-900">Kontak</h1>
        <p className="text-slate-700">Diskusikan kebutuhan pelatihan Anda.</p>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm text-sm text-slate-700 space-y-2">
          <div>Email: <span className="font-semibold">{profile?.email || 'hello@ptmpn.co.id'}</span></div>
          <div>Phone: <span className="font-semibold">{profile?.phone || '+62 21 12345678'}</span></div>
          <div>WhatsApp: <span className="font-semibold">{profile?.whatsapp || '+62 811 0000'}</span></div>
          <div>Address: <span className="font-semibold">{profile?.address || 'Jakarta'}</span></div>
        </div>
      </div>
      <form className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none"
          />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none"
          />
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          placeholder="Message"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary outline-none"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
        >
          Kirim Pesan
        </button>
        {status && <div className="text-sm text-slate-700">{status}</div>}
      </form>
    </div>
  );
};

export default ContactPage;
