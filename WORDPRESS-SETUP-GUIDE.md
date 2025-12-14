# Step-by-Step Guide: Connecting React Frontend with WordPress Dashboard

This guide will walk you through connecting your Next.js/React frontend with WordPress as a headless CMS.

## Prerequisites

- WordPress site (already have: https://studymentorhub.online)
- Access to WordPress admin dashboard
- Your React/Next.js project (already set up)

---

## Step 1: Verify WordPress REST API is Enabled

WordPress REST API is enabled by default in WordPress 4.7+, but let's verify it's working.

### 1.1 Test the API Endpoint

Open your browser and visit:
```
https://studymentorhub.online/wp-json/wp/v2/posts
```

**Expected Result:** You should see JSON data with your WordPress posts.

**If you see an error:**
- Check if your WordPress site is accessible
- Verify WordPress version is 4.7 or higher
- Check if any security plugins are blocking the REST API

### 1.2 Test with Featured Media

Visit:
```
https://studymentorhub.online/wp-json/wp/v2/posts?per_page=1&_embed
```

This should return posts with embedded media, author, and categories.

---

## Step 2: Configure WordPress for Headless CMS

### 2.1 Enable REST API (Usually Already Enabled)

1. Log in to your WordPress admin dashboard: `https://studymentorhub.online/wp-admin`
2. Go to **Settings → Permalinks**
3. Make sure permalinks are NOT set to "Plain" (choose any other option like "Post name")
4. Click **Save Changes** (even if you don't change anything)

### 2.2 Check CORS Settings (If Needed)

If your frontend is on a different domain, you may need to enable CORS.

**Option A: Using a Plugin (Recommended)**
1. Install "REST API - Filter Fields" or "CORS Headers" plugin
2. Configure it to allow your frontend domain

**Option B: Add to functions.php (Advanced)**
Add this to your theme's `functions.php` file:
```php
function add_cors_headers() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('rest_api_init', 'add_cors_headers');
```

**Note:** For same-domain setups (localhost during development), CORS usually isn't needed.

---

## Step 3: Set Up Environment Variables

### 3.1 For Local Development

1. Navigate to your project folder:
   ```bash
   cd study-mentor-frontend
   ```

2. Create or edit `.env.local` file in the root of `study-mentor-frontend`:
   ```env
   NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2
   ```

3. **Important:** Restart your development server after adding/changing environment variables:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

### 3.2 For Production (Vercel)

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings → Environment Variables**
4. Add a new variable:
   - **Name:** `NEXT_PUBLIC_WP_API_URL`
   - **Value:** `https://studymentorhub.online/wp-json/wp/v2`
   - **Environment:** Production, Preview, Development (select all)
5. Click **Save**
6. Redeploy your application

---

## Step 4: Test the Connection

### 4.1 Test API Directly

Open your browser console or use a tool like Postman/curl:

```bash
# Test posts endpoint
curl https://studymentorhub.online/wp-json/wp/v2/posts?per_page=1

# Test with embedded data
curl https://studymentorhub.online/wp-json/wp/v2/posts?per_page=1&_embed
```

### 4.2 Test from Your Frontend

1. Start your development server:
   ```bash
   cd study-mentor-frontend
   npm run dev
   ```

2. Open browser console (F12)
3. Navigate to: `http://localhost:3000/blog`
4. Check the console for any errors
5. Check the Network tab to see API requests

### 4.3 Verify Posts Are Loading

- You should see your WordPress posts displayed on the blog page
- Each post should show:
  - Title
  - Featured image (if set)
  - Excerpt
  - Date
  - Categories
  - Author (if available)

---

## Step 5: Configure WordPress Posts

### 5.1 Create/Edit Posts in WordPress

1. Log in to WordPress admin: `https://studymentorhub.online/wp-admin`
2. Go to **Posts → Add New** (or edit existing)
3. Fill in:
   - **Title** - Will appear as post title
   - **Content** - Full post content (supports HTML)
   - **Excerpt** - Short description (or WordPress will auto-generate)
   - **Featured Image** - Set a featured image (important!)
   - **Categories** - Assign categories
   - **Tags** - Add tags if needed
4. Click **Publish**

### 5.2 Set Featured Images

**Why it's important:** Featured images appear on your blog listing page.

1. While editing a post, scroll to **Featured Image** section
2. Click **Set featured image**
3. Upload or select an image
4. Click **Set featured image**
5. **Publish** the post

### 5.3 Organize Categories

1. Go to **Posts → Categories**
2. Create categories like:
   - Study Techniques
   - Time Management
   - Memory & Focus
   - Goal Setting
   - Exam Preparation
   - Productivity
3. Assign categories to posts

---

## Step 6: Verify Everything Works

### 6.1 Checklist

- [ ] WordPress REST API is accessible
- [ ] Environment variable is set correctly
- [ ] Development server is running
- [ ] Posts appear on `/blog` page
- [ ] Featured images display correctly
- [ ] Clicking a post opens detail page
- [ ] Single post page shows full content
- [ ] Categories display correctly
- [ ] Author information shows (if available)
- [ ] "Load More" button works (if you have more than 10 posts)

### 6.2 Common Issues & Solutions

#### Issue: Posts Not Loading
**Solution:**
- Check browser console for errors
- Verify `.env.local` file exists and has correct URL
- Restart development server
- Check Network tab to see if API requests are being made

#### Issue: CORS Error
**Solution:**
- If frontend and WordPress are on different domains, enable CORS
- Check WordPress security plugins aren't blocking REST API
- Verify WordPress site is accessible

#### Issue: Images Not Showing
**Solution:**
- Ensure featured images are set in WordPress
- Check if images are publicly accessible
- Verify `_embed=1` parameter is included in API requests
- Check browser console for image loading errors

#### Issue: Environment Variable Not Working
**Solution:**
- Ensure variable name starts with `NEXT_PUBLIC_` for Next.js
- Restart development server after adding/changing env variables
- Check `.env.local` is in the correct location (root of `study-mentor-frontend`)
- For Vercel, ensure variable is added in dashboard and app is redeployed

---

## Step 7: Production Deployment

### 7.1 Deploy to Vercel

1. Push your code to GitHub/GitLab
2. Connect repository to Vercel
3. Add environment variable in Vercel dashboard:
   - `NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2`
4. Deploy

### 7.2 Verify Production

1. Visit your deployed site
2. Navigate to blog page
3. Verify posts load correctly
4. Test single post pages
5. Check browser console for errors

---

## Step 8: Optional Enhancements

### 8.1 Add Authentication (For Private Content)

If you need to access private/draft posts:

1. In WordPress, go to **Users → Your Profile**
2. Scroll to **Application Passwords**
3. Create a new application password (e.g., "React Frontend")
4. Copy the generated password
5. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_WP_API_USERNAME=your_username
   NEXT_PUBLIC_WP_API_PASSWORD=your_application_password
   ```

**Note:** This is only needed for private content. Public posts don't require authentication.

### 8.2 Enable Search

The API service already supports search. You can add a search bar to filter posts.

### 8.3 Add Category Filtering

You can filter posts by category using the WordPress API.

---

## Quick Reference

### WordPress REST API Endpoints

- **All Posts:** `https://studymentorhub.online/wp-json/wp/v2/posts`
- **Single Post (by slug):** `https://studymentorhub.online/wp-json/wp/v2/posts?slug=your-post-slug`
- **Single Post (by ID):** `https://studymentorhub.online/wp-json/wp/v2/posts/1`
- **With Embedded Data:** Add `?_embed=1` to any endpoint
- **Categories:** `https://studymentorhub.online/wp-json/wp/v2/categories`
- **Media:** `https://studymentorhub.online/wp-json/wp/v2/media/{id}`

### Environment Variables

**Local (.env.local):**
```env
NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2
```

**Vercel:**
- Add in Settings → Environment Variables
- Name: `NEXT_PUBLIC_WP_API_URL`
- Value: `https://studymentorhub.online/wp-json/wp/v2`

---

## Need Help?

1. **Check Browser Console** - Look for JavaScript errors
2. **Check Network Tab** - Verify API requests are being made
3. **Test API Directly** - Use browser or curl to test WordPress API
4. **Verify Environment Variables** - Ensure they're set correctly
5. **Check WordPress** - Verify posts are published and have featured images

---

## Summary

1. ✅ WordPress REST API is enabled by default
2. ✅ Set environment variable: `NEXT_PUBLIC_WP_API_URL`
3. ✅ Create/edit posts in WordPress with featured images
4. ✅ Test locally: `npm run dev`
5. ✅ Deploy to Vercel with environment variables
6. ✅ Enjoy your headless CMS setup!

Your frontend is now connected to WordPress! 🎉
