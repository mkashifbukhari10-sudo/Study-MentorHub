# Troubleshooting: "Failed to fetch" Error

## Problem
You're seeing "Failed to fetch" error when trying to load WordPress posts in your React app.

## Solution Applied
I've created Next.js API routes that act as a proxy between your frontend and WordPress. This solves CORS issues.

## What Changed

1. **Created API Routes:**
   - `/app/api/wordpress/posts/route.ts` - Fetches all posts
   - `/app/api/wordpress/post/[slug]/route.ts` - Fetches single post by slug

2. **Updated API Service:**
   - Now uses Next.js API routes instead of direct WordPress API calls
   - This avoids CORS issues completely

## Next Steps

1. **Restart your development server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Clear browser cache:**
   - Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or open DevTools → Network tab → Check "Disable cache"

3. **Check browser console:**
   - Press `F12` to open DevTools
   - Look for any errors
   - You should see logs like "Fetching posts from: /api/wordpress/posts"

4. **Test the API route directly:**
   - Visit: `http://localhost:3000/api/wordpress/posts?per_page=1`
   - Should return JSON with your WordPress posts

## If Still Not Working

### Check 1: Verify API Route Works
Visit in browser:
```
http://localhost:3000/api/wordpress/posts?per_page=1
```

**Expected:** JSON data with posts
**If error:** Check server console for errors

### Check 2: Verify Environment Variable
1. Check `.env.local` file exists
2. Should contain: `NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2`
3. Restart dev server after any changes

### Check 3: Check Server Console
Look at the terminal where `npm run dev` is running:
- Any errors?
- Does it say "Ready on http://localhost:3000"?

### Check 4: Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Look for request to `/api/wordpress/posts`
5. Click on it and check:
   - Status code (should be 200)
   - Response (should show JSON)

## Common Issues

### Issue: "404 Not Found" for API route
**Solution:** Make sure you restarted the dev server after creating the API routes

### Issue: "500 Internal Server Error"
**Solution:** 
- Check server console for errors
- Verify WordPress API URL is correct in `.env.local`
- Test WordPress API directly: `https://studymentorhub.online/wp-json/wp/v2/posts`

### Issue: Posts still not showing
**Solution:**
- Check if posts are published in WordPress (not drafts)
- Verify posts exist: Visit `https://studymentorhub.online/wp-json/wp/v2/posts`
- Check browser console for JavaScript errors

## Testing Checklist

- [ ] Dev server is running
- [ ] `.env.local` file exists with correct URL
- [ ] API route works: `http://localhost:3000/api/wordpress/posts`
- [ ] Browser console shows no errors
- [ ] Network tab shows successful API requests
- [ ] Posts are published in WordPress (not drafts)

## Still Need Help?

1. Check browser console (F12) for specific error messages
2. Check server console for backend errors
3. Test WordPress API directly in browser
4. Verify environment variables are set correctly
