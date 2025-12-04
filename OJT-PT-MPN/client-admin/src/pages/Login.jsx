import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@ptmpn.local');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sand px-6">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl shadow-xl shadow-primary/10 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center font-display font-bold text-lg">MPN</div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">PT MPN</p>
            <p className="text-slate-600 text-sm">Admin Dashboard</p>
          </div>
        </div>
        <h1 className="text-2xl font-display font-semibold text-slate-900 mb-2">Sign in</h1>
        <p className="text-sm text-slate-600 mb-6">Access internal tools to manage content.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
