/**
 * WordPress REST API Service
 * Handles all API calls to WordPress headless CMS
 */

// WordPress API base URL - use environment variable or fallback
// For Next.js, use NEXT_PUBLIC_ prefix to expose to browser
// For Vite projects, use VITE_ prefix
const getApiUrl = (): string => {
  // In browser/client-side, environment variables are available directly
  if (typeof window !== 'undefined') {
    // Client-side: Next.js exposes NEXT_PUBLIC_ vars automatically
    return process.env.NEXT_PUBLIC_WP_API_URL || 
           'https://studymentorhub.online/wp-json/wp/v2';
  }
  // Server-side
  return process.env.NEXT_PUBLIC_WP_API_URL || 
         'https://studymentorhub.online/wp-json/wp/v2';
};

const WP_API_URL = getApiUrl();

// Log API URL for debugging (remove in production)
if (typeof window !== 'undefined') {
  console.log('WordPress API URL:', WP_API_URL);
}

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  format: string;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
    author?: Array<{
      id: number;
      name: string;
      slug: string;
    }>;
  };
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  media_details?: {
    sizes?: {
      medium?: { source_url: string };
      large?: { source_url: string };
      full?: { source_url: string };
    };
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  slug: string;
}

/**
 * Handle API errors
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`;
    
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      errorMessage = response.statusText || errorMessage;
    }

    throw new Error(errorMessage);
  }

  return response.json();
}

/**
 * Fetch all posts with pagination and embedding support
 * Uses Next.js API route to avoid CORS issues
 */
export async function fetchPosts(params?: {
  page?: number;
  per_page?: number;
  search?: string;
  categories?: number[];
  tags?: number[];
}): Promise<WordPressPost[]> {
  try {
    const queryParams = new URLSearchParams();
    
    // Include embedded data for featured media, author, and categories
    queryParams.append('_embed', '1');
    
    if (params?.page) {
      queryParams.append('page', params.page.toString());
    }
    
    if (params?.per_page) {
      queryParams.append('per_page', params.per_page.toString());
    } else {
      queryParams.append('per_page', '10');
    }
    
    if (params?.search) {
      queryParams.append('search', params.search);
    }
    
    if (params?.categories && params.categories.length > 0) {
      queryParams.append('categories', params.categories.join(','));
    }
    
    if (params?.tags && params.tags.length > 0) {
      queryParams.append('tags', params.tags.join(','));
    }

    // Use Next.js API route to avoid CORS issues
    const url = `/api/wordpress/posts?${queryParams.toString()}`;
    
    // Log the URL for debugging
    console.log('Fetching posts from:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

/**
 * Fetch a single post by slug
 * Uses Next.js API route to avoid CORS issues
 */
export async function fetchPostBySlug(slug: string): Promise<WordPressPost> {
  try {
    // Validate slug
    if (!slug || slug.trim() === '') {
      throw new Error('Slug is required');
    }

    // Use Next.js API route to avoid CORS issues
    const url = `/api/wordpress/post/${encodeURIComponent(slug)}`;
    
    console.log('Fetching post by slug from:', url);
    console.log('Slug value:', slug);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `HTTP error! status: ${response.status}`;
      console.error('API response error:', response.status, errorMessage);
      throw new Error(errorMessage);
    }

    const post = await response.json();
    console.log('Successfully fetched post:', post.id, post.title?.rendered);
    return post;
  } catch (error) {
    console.error(`Error fetching post by slug "${slug}":`, error);
    throw error;
  }
}

/**
 * Fetch a single post by ID
 * Falls back to direct WordPress API (for legacy support)
 */
export async function fetchPostById(id: number): Promise<WordPressPost> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('_embed', '1');
    
    // Try Next.js API route first, fallback to direct WordPress API
    const apiUrl = `/api/wordpress/posts?id=${id}&_embed=1`;
    const directUrl = `${WP_API_URL}/posts/${id}?${queryParams.toString()}`;
    
    // Try API route first
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const posts = await response.json();
        if (posts && posts.length > 0) {
          return posts[0];
        }
      }
    } catch {
      // Fall through to direct API
    }
    
    // Fallback to direct WordPress API
    const response = await fetch(directUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'omit',
    });

    return handleResponse<WordPressPost>(response);
  } catch (error) {
    console.error(`Error fetching post by ID "${id}":`, error);
    throw error;
  }
}

/**
 * Fetch media by ID to get image URL
 */
export async function fetchMediaById(mediaId: number): Promise<WordPressMedia | null> {
  try {
    if (!mediaId || mediaId === 0) {
      return null;
    }

    const url = `${WP_API_URL}/media/${mediaId}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache media for 1 hour
    });

    return handleResponse<WordPressMedia>(response);
  } catch (error) {
    console.error(`Error fetching media by ID "${mediaId}":`, error);
    return null;
  }
}

/**
 * Get featured image URL from post
 * Tries embedded media first, then fetches if needed
 */
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  // Try to get from embedded media first
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }

  // If no embedded media and no featured_media ID, return null
  if (!post.featured_media || post.featured_media === 0) {
    return null;
  }

  // Return null - caller should fetch media if needed
  return null;
}

/**
 * Get categories from post
 */
export function getPostCategories(post: WordPressPost): WordPressCategory[] {
  if (!post._embedded?.['wp:term']) {
    return [];
  }

  // wp:term is an array of arrays, categories are typically the first array
  const terms = post._embedded['wp:term'].flat();
  return terms
    .filter(term => term.taxonomy === 'category')
    .map(term => ({
      id: term.id,
      name: term.name,
      slug: term.slug,
    }));
}

/**
 * Get author from post
 */
export function getPostAuthor(post: WordPressPost): WordPressAuthor | null {
  if (!post._embedded?.author?.[0]) {
    return null;
  }

  const author = post._embedded.author[0];
  return {
    id: author.id,
    name: author.name,
    slug: author.slug,
  };
}

/**
 * Format date string to readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Strip HTML tags from string
 */
export function stripHtml(html: string): string {
  if (typeof window !== 'undefined') {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
  // Server-side: simple regex (not perfect but works for most cases)
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Calculate estimated read time from content
 */
export function calculateReadTime(content: string): string {
  const text = stripHtml(content);
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
