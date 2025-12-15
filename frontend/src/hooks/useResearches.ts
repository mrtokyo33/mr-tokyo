import { useQuery } from '@tanstack/react-query';
import { articlesApi } from '@/lib/api';
import type { Article } from '@/lib/api';

export const useResearches = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: articlesApi.getAll,
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: true,
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => articlesApi.getBySlug(slug),
    enabled: !!slug,
  });
};

export type { Article };
