import api from './client';

export const getProfile = () => api.get('/api/profile').then((res) => res.data.data || res.data);
export const getServices = () => api.get('/api/services').then((res) => res.data.data || res.data);
export const getTrainings = () => api.get('/api/trainings').then((res) => res.data.data || res.data);
export const getTrainingBySlug = (slug) =>
  api.get(`/api/trainings/${slug}`).then((res) => res.data.data || res.data);
export const getTestimonials = () => api.get('/api/testimonials').then((res) => res.data.data || res.data);
export const getPartners = () => api.get('/api/partners').then((res) => res.data.data || res.data);
export const submitContact = (payload) => api.post('/api/contact', payload).then((res) => res.data);
