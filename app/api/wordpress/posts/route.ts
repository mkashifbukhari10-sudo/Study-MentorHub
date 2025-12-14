/**
 * Next.js API Route to proxy WordPress REST API requests
 * This avoids CORS issues by making requests server-side
 */

import { NextRequest, NextResponse } from 'next/server';

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://studymentorhub.online/wp-json/wp/v2';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Build query string from search params
    const params = new URLSearchParams();
    
    // Copy all query parameters
    searchParams.forEach((value, key) => {
      params.append(key, value);
    });
    
    // Always include _embed for featured media
    if (!params.has('_embed')) {
      params.append('_embed', '1');
    }
    
    // Build WordPress API URL
    const url = `${WP_API_URL}/posts?${params.toString()}`;
    
    // Fetch from WordPress
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Revalidate every 60 seconds
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Return with CORS headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
