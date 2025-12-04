import axios from 'axios';

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: apiBase
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('mpn_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
