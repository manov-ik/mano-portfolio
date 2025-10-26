import { useState, useEffect, useCallback } from 'react';
import { writingsApi } from '../services/writingsApi';
import type { Writing, WritingsResponse } from '../services/writingsApi';

interface UseWritingsOptions {
  page?: number;
  limit?: number;
  category?: string;
  published?: boolean;
  sortBy?: 'createdAt' | 'updatedAt' | 'order' | 'title';
  sortOrder?: 'asc' | 'desc';
  autoFetch?: boolean;
}

interface UseWritingsReturn {
  writings: Writing[];
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  limit: number;
  refetch: () => Promise<void>;
  loadMore: () => Promise<void>;
  hasMore: boolean;
}

export const useWritings = (options: UseWritingsOptions = {}): UseWritingsReturn => {
  const {
    page = 1,
    limit = 10,
    category,
    published = true,
    sortBy = 'order',
    sortOrder = 'asc',
    autoFetch = true,
  } = options;

  const [writings, setWritings] = useState<Writing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(page);
  const [hasMore, setHasMore] = useState(true);

  const fetchWritings = useCallback(async (pageNum: number = 1, append: boolean = false) => {
    try {
      setLoading(true);
      setError(null);

      const response: WritingsResponse = await writingsApi.getWritings({
        page: pageNum,
        limit,
        category,
        published,
        sortBy,
        sortOrder,
      });

      if (append) {
        setWritings(prev => [...prev, ...response.writings]);
      } else {
        setWritings(response.writings);
      }

      setTotal(response.total);
      setCurrentPage(response.page);
      setHasMore(response.writings.length === limit && response.page * limit < response.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch writings');
      console.error('Error fetching writings:', err);
    } finally {
      setLoading(false);
    }
  }, [limit, category, published, sortBy, sortOrder]);

  const refetch = useCallback(async () => {
    await fetchWritings(1, false);
  }, [fetchWritings]);

  const loadMore = useCallback(async () => {
    if (hasMore && !loading) {
      await fetchWritings(currentPage + 1, true);
    }
  }, [hasMore, loading, currentPage, fetchWritings]);

  useEffect(() => {
    if (autoFetch) {
      fetchWritings(1, false);
    }
  }, [autoFetch, fetchWritings]);

  return {
    writings,
    loading,
    error,
    total,
    page: currentPage,
    limit,
    refetch,
    loadMore,
    hasMore,
  };
};

interface UseWritingOptions {
  slug?: string;
  autoFetch?: boolean;
}

interface UseWritingReturn {
  writing: Writing | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useWriting = (options: UseWritingOptions = {}): UseWritingReturn => {
  const { slug, autoFetch = true } = options;

  const [writing, setWriting] = useState<Writing | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWriting = useCallback(async () => {
    if (!slug) return;

    try {
      setLoading(true);
      setError(null);

      const response = await writingsApi.getWritingBySlug(slug);
      setWriting(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch writing');
      console.error('Error fetching writing:', err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  const refetch = useCallback(async () => {
    await fetchWriting();
  }, [fetchWriting]);

  useEffect(() => {
    if (autoFetch && slug) {
      fetchWriting();
    }
  }, [autoFetch, slug, fetchWriting]);

  return {
    writing,
    loading,
    error,
    refetch,
  };
};

export default useWritings;
