// API service for writings - Vercel Backend integration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://writings-backend.vercel.app/api';

export interface Writing {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  created_at: string;
  updated_at?: string;
  read_time?: string;
  category?: string;
  author?: string;
  tags?: string[];
  order?: number;
  published?: boolean;
  slug?: string;
}

export interface WritingsResponse {
  writings: Writing[];
  total: number;
  page: number;
  limit: number;
}

export interface ApiError {
  message: string;
  status: number;
}

class WritingsApiService {
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  private async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      return await this.handleResponse<T>(response);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get all writings with pagination and sorting
  async getWritings(params?: {
    page?: number;
    limit?: number;
    category?: string;
    published?: boolean;
    sortBy?: 'createdAt' | 'updatedAt' | 'order' | 'title';
    sortOrder?: 'asc' | 'desc';
  }): Promise<WritingsResponse> {
    const searchParams = new URLSearchParams();
    
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.category) searchParams.append('category', params.category);
    if (params?.published !== undefined) searchParams.append('published', params.published.toString());
    if (params?.sortBy) searchParams.append('sortBy', params.sortBy);
    if (params?.sortOrder) searchParams.append('sortOrder', params.sortOrder);

    const queryString = searchParams.toString();
    const endpoint = `/writings${queryString ? `?${queryString}` : ''}`;

    return this.makeRequest<WritingsResponse>(endpoint);
  }

  // Get a single writing by ID
  async getWritingById(id: string): Promise<Writing> {
    return this.makeRequest<Writing>(`/writings/${id}`);
  }

  // Get a single writing by slug
  async getWritingBySlug(slug: string): Promise<Writing> {
    return this.makeRequest<Writing>(`/writings/slug/${slug}`);
  }

  // Get writings by category
  async getWritingsByCategory(category: string, params?: {
    page?: number;
    limit?: number;
    sortBy?: 'createdAt' | 'updatedAt' | 'order' | 'title';
    sortOrder?: 'asc' | 'desc';
  }): Promise<WritingsResponse> {
    return this.getWritings({ ...params, category });
  }

  // Get all categories
  async getCategories(): Promise<string[]> {
    return this.makeRequest<string[]>('/writings/categories');
  }

  // Search writings
  async searchWritings(query: string, params?: {
    page?: number;
    limit?: number;
    category?: string;
  }): Promise<WritingsResponse> {
    const searchParams = new URLSearchParams();
    searchParams.append('q', query);
    
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.category) searchParams.append('category', params.category);

    return this.makeRequest<WritingsResponse>(`/writings/search?${searchParams.toString()}`);
  }

  // Create a new writing (for admin use)
  async createWriting(writing: Omit<Writing, 'id' | 'createdAt' | 'updatedAt'>): Promise<Writing> {
    return this.makeRequest<Writing>('/writings', {
      method: 'POST',
      body: JSON.stringify(writing),
    });
  }

  // Update an existing writing (for admin use)
  async updateWriting(id: string, updates: Partial<Writing>): Promise<Writing> {
    return this.makeRequest<Writing>(`/writings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  // Delete a writing (for admin use)
  async deleteWriting(id: string): Promise<void> {
    return this.makeRequest<void>(`/writings/${id}`, {
      method: 'DELETE',
    });
  }
}

// Export a singleton instance
export const writingsApi = new WritingsApiService();

// Export default for convenience
export default writingsApi;
