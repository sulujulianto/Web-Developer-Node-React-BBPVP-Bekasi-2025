import axios from 'axios';

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: apiBase
});

export const fetchTrainings = async () => {
  const { data } = await api.get('/api/public/trainings');
  return data;
};
