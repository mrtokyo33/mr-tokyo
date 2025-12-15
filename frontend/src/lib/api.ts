import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Article {
  id: number;
  title: string;
  slug: string;
  author_name: string;
  created_at: string;
  html_content: string;
  metadata: Record<string, any>;
}

export const articlesApi = {
  getAll: async (): Promise<Article[]> => {
    const { data } = await api.get<Article[]>('/articles/');
    return data;
  },
  
  getBySlug: async (slug: string): Promise<Article> => {
    const { data } = await api.get<Article>(`/articles/${slug}/`);
    return data;
  },
};
