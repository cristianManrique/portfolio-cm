import axios from 'axios';

const api = axios.create();

// Attach Bearer token automatically on every request if present
api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const apiGet    = (url)       => api.get(url);
export const apiPost   = (url, data) => api.post(url, data);
export const apiPatch  = (url, data) => api.patch(url, data);
export const apiDelete = (url)       => api.delete(url);
