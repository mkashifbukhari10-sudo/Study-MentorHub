/**
 * Next.js API Route to proxy single WordPress post by slug
 */

import { NextRequest, NextResponse } from 'next/server';

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://studymentorhub.online/wp-json/wp/v2';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    // Handle both Promise and direct object (Next.js 15+ vs 13/14)
    const resolvedParams = params instanceof Promise ? await params : params;
    const { slug } = resolvedParams;
    
    // Debug logging
    console.log('API Route - Received params:', resolvedParams);
    console.log('API Route - Slug:', slug);
    
    if (!slug || slug.trim() === '') {
      console.error('API Route - Slug is missing or empty');
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }

    // Build WordPress API URL
    const url = `${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=1`;
    
    console.log('API Route - Fetching from WordPress:', url);
    
    // Fetch from WordPress
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Remove next.revalidate for API routes - use cache headers instead
      cache: 'no-store', // Or 'force-cache' with revalidation
    });

    if (!response.ok) {
      console.error('API Route - WordPress API error:', response.status, response.statusText);
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();

    console.log('API Route - WordPress returned', posts?.length || 0, 'posts');

    if (!posts || posts.length === 0) {
      console.warn('API Route - No posts found for slug:', slug);
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    console.log('API Route - Returning post:', posts[0].id, posts[0].title?.rendered);

    // Return with CORS headers
    return NextResponse.json(posts[0], {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('API Route - Error fetching WordPress post:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to fetch post',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
