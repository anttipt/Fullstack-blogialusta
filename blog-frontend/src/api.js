import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000'
});

export const getArticles = () => API.get('/articles');
export const getArticle = (id) => API.get(`/articles/${id}`);
export const createArticle = (data) => API.post('/articles', data);
export const updateArticle = (id, data) => API.put(`/articles/${id}`, data);
export const deleteArticle = (id) => API.delete(`/articles/${id}`);

