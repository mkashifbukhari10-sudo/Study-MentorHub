# WordPress REST API Integration

This document describes the WordPress REST API integration for the blog functionality.

## Environment Variables

Create a `.env.local` file in the `study-mentor-frontend` directory with:

```
NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2
```

**Note:** In Next.js, environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. For Vite projects, use `VITE_` prefix instead.

## Features Implemented

### 1. WordPress API Service (`app/services/wordpressApi.ts`)
- Fetches posts with pagination support
- Fetches single post by slug or ID
- Handles featured images from embedded media
- Extracts categories, tags, and author information
- Includes error handling and utility functions

### 2. Blog Listing Page (`app/Blog.tsx`)
- Dynamically fetches posts from WordPress
- Displays featured images, titles, excerpts, dates, and categories
- Shows loading states while fetching
- Error handling with retry functionality
- "Load More" button for pagination
- Maintains existing design and styling

### 3. Single Post Page (`app/BlogDetail.tsx`)
- Fetches single post by slug (preferred) or ID (fallback)
- Displays full post content with HTML rendering
- Shows featured image, author, date, and read time
- Table of contents extracted from post headings
- Error handling and loading states
- Maintains existing design and styling

## API Endpoints Used

- `GET /wp/v2/posts` - Fetch all posts (with `_embed=1` for related data)
- `GET /wp/v2/posts?slug={slug}` - Fetch post by slug
- `GET /wp/v2/posts/{id}` - Fetch post by ID
- `GET /wp/v2/media/{id}` - Fetch media/image by ID (if needed)

## Data Structure

### WordPress Post Object
```typescript
{
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;
  author: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ id, name, slug, taxonomy }>>;
    author?: Array<{ id, name, slug }>;
  };
}
```

## Routing

- Blog listing: `/blog`
- Single post: `/blog/detail?slug={post-slug}` (preferred)
- Legacy support: `/blog/detail?id={post-id}` (still works)

## Testing

1. **Test API Connection:**
   ```bash
   curl https://studymentorhub.online/wp-json/wp/v2/posts?per_page=1&_embed
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Check Browser Console:**
   - Look for any API errors
   - Verify posts are loading correctly
   - Check network tab for API requests

## Troubleshooting

### Posts Not Loading
1. Check `.env.local` file exists and has correct URL
2. Verify WordPress site is accessible
3. Check browser console for errors
4. Verify CORS is enabled on WordPress site (if needed)

### Images Not Showing
- Featured images are fetched from `_embedded['wp:featuredmedia']`
- If no featured image, falls back to default Unsplash images
- Check WordPress media library for featured image assignments

### Categories Not Displaying
- Categories are extracted from `_embedded['wp:term']`
- Ensure `_embed=1` is included in API requests
- Check WordPress post has categories assigned

## Next Steps

1. Add search functionality
2. Add category filtering
3. Add tag filtering
4. Implement caching for better performance
5. Add SEO meta tags for posts
6. Add social sharing functionality
