# 📋 Step-by-Step Checklist: Connect WordPress with React Frontend

Follow these steps in order. Check off each item as you complete it.

---

## ✅ STEP 1: Verify WordPress REST API is Working

### 1.1 Test WordPress API in Browser
- [ ] Open browser
- [ ] Visit: `https://studymentorhub.online/wp-json/wp/v2/posts`
- [ ] **Expected:** You see JSON data (even if empty array `[]`)
- [ ] **If error:** Your WordPress site might be down or REST API is disabled

### 1.2 Test with One Post
- [ ] Visit: `https://studymentorhub.online/wp-json/wp/v2/posts?per_page=1&_embed`
- [ ] **Expected:** JSON with post data including embedded media
- [ ] **Note:** If you see data, WordPress API is working! ✅

---

## ✅ STEP 2: Set Up Environment Variable (Local Development)

### 2.1 Navigate to Project Folder
- [ ] Open terminal/command prompt
- [ ] Run: `cd c:\Users\devar\Downloads\SMH\study-mentor-frontend`
- [ ] Verify you're in the correct folder

### 2.2 Create/Edit .env.local File
- [ ] Create a file named `.env.local` in the `study-mentor-frontend` folder
- [ ] Add this line (exactly as shown):
  ```
  NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2
  ```
- [ ] Save the file
- [ ] **Important:** File must be in `study-mentor-frontend` folder (same level as `package.json`)

### 2.3 Verify .env.local File
- [ ] Check file exists: `study-mentor-frontend/.env.local`
- [ ] Check file contains: `NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2`
- [ ] **Note:** No spaces around the `=` sign

---

## ✅ STEP 3: Start Development Server

### 3.1 Install Dependencies (if not done)
- [ ] Run: `npm install`
- [ ] Wait for installation to complete

### 3.2 Start Server
- [ ] Run: `npm run dev`
- [ ] Wait for: "Ready on http://localhost:3000"
- [ ] **Important:** If you changed `.env.local`, restart the server!

### 3.3 Open Browser
- [ ] Open: `http://localhost:3000/blog`
- [ ] You should see the blog page

---

## ✅ STEP 4: Test the Connection

### 4.1 Check Browser Console
- [ ] Press `F12` to open Developer Tools
- [ ] Click "Console" tab
- [ ] Look for any red errors
- [ ] **If no errors:** Good! ✅
- [ ] **If errors:** Note them down

### 4.2 Check Network Tab
- [ ] In Developer Tools, click "Network" tab
- [ ] Refresh the page (`F5`)
- [ ] Look for requests to `studymentorhub.online`
- [ ] Click on the request
- [ ] Check "Response" tab - should show WordPress posts data
- [ ] **If you see data:** Connection is working! ✅

### 4.3 Verify Posts Display
- [ ] On the blog page, you should see:
  - [ ] Post titles
  - [ ] Post excerpts
  - [ ] Dates
  - [ ] Categories (if assigned)
  - [ ] Featured images (if set)
- [ ] **If posts show:** Success! ✅

---

## ✅ STEP 5: Test Single Post Page

### 5.1 Click on a Post
- [ ] Click any post card on the blog page
- [ ] Should navigate to detail page

### 5.2 Verify Detail Page
- [ ] Full post content displays
- [ ] Featured image shows (if set)
- [ ] Author name shows (if available)
- [ ] Date shows
- [ ] "Back to Blog" button works

---

## ✅ STEP 6: Configure WordPress Posts

### 6.1 Log in to WordPress
- [ ] Go to: `https://studymentorhub.online/wp-admin`
- [ ] Log in with your credentials

### 6.2 Create/Edit a Post
- [ ] Go to: **Posts → Add New** (or edit existing)
- [ ] Fill in:
  - [ ] **Title** (required)
  - [ ] **Content** (write your post)
  - [ ] **Excerpt** (short description - optional)
  - [ ] **Featured Image** (click "Set featured image")
  - [ ] **Categories** (select or create)
- [ ] Click **Publish**

### 6.3 Verify Post Appears
- [ ] Go back to your React app: `http://localhost:3000/blog`
- [ ] Refresh the page
- [ ] Your new post should appear!

---

## ✅ STEP 7: Set Featured Images

### 7.1 Why Featured Images Matter
- Featured images appear on the blog listing page
- Makes your blog look professional

### 7.2 Set Featured Image for Each Post
- [ ] Edit a post in WordPress
- [ ] Scroll to "Featured Image" section
- [ ] Click "Set featured image"
- [ ] Upload or select an image
- [ ] Click "Set featured image"
- [ ] **Publish** the post
- [ ] Check your React app - image should appear!

---

## ✅ STEP 8: Organize Categories

### 8.1 Create Categories
- [ ] In WordPress, go to: **Posts → Categories**
- [ ] Create categories like:
  - [ ] Study Techniques
  - [ ] Time Management
  - [ ] Memory & Focus
  - [ ] Goal Setting
  - [ ] Exam Preparation
  - [ ] Productivity

### 8.2 Assign Categories to Posts
- [ ] Edit a post
- [ ] In the right sidebar, check categories
- [ ] **Publish** the post
- [ ] Check React app - category badge should appear!

---

## ✅ STEP 9: Deploy to Vercel (Production)

### 9.1 Push Code to GitHub
- [ ] Commit your changes
- [ ] Push to GitHub repository

### 9.2 Add Environment Variable in Vercel
- [ ] Go to: https://vercel.com
- [ ] Select your project
- [ ] Go to: **Settings → Environment Variables**
- [ ] Click **Add New**
- [ ] Enter:
  - **Name:** `NEXT_PUBLIC_WP_API_URL`
  - **Value:** `https://studymentorhub.online/wp-json/wp/v2`
  - **Environment:** Select all (Production, Preview, Development)
- [ ] Click **Save**

### 9.3 Redeploy
- [ ] Go to **Deployments** tab
- [ ] Click **Redeploy** on latest deployment
- [ ] Wait for deployment to complete

### 9.4 Verify Production
- [ ] Visit your deployed site
- [ ] Go to blog page
- [ ] Verify posts load correctly
- [ ] Test single post pages

---

## 🐛 Troubleshooting Checklist

### If Posts Don't Load:

- [ ] Check browser console (F12) for errors
- [ ] Verify `.env.local` file exists and has correct URL
- [ ] Restart development server (`Ctrl+C` then `npm run dev`)
- [ ] Check Network tab - are API requests being made?
- [ ] Test WordPress API directly in browser
- [ ] Verify WordPress site is accessible

### If Images Don't Show:

- [ ] Check if featured images are set in WordPress
- [ ] Verify images are publicly accessible
- [ ] Check browser console for image loading errors
- [ ] Try opening image URL directly in browser

### If Environment Variable Not Working:

- [ ] Ensure variable name starts with `NEXT_PUBLIC_`
- [ ] No spaces around `=` sign
- [ ] File is named exactly `.env.local` (not `.env` or `.env.local.txt`)
- [ ] File is in `study-mentor-frontend` folder (not parent folder)
- [ ] Restart dev server after creating/changing file
- [ ] For Vercel: Add in dashboard AND redeploy

---

## 📞 Quick Reference

### WordPress API URLs:
- All posts: `https://studymentorhub.online/wp-json/wp/v2/posts`
- Single post: `https://studymentorhub.online/wp-json/wp/v2/posts?slug=your-slug`
- With embedded data: Add `?_embed=1`

### Environment Variable:
```env
NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2
```

### Commands:
```bash
# Navigate to project
cd study-mentor-frontend

# Start dev server
npm run dev

# Install dependencies (if needed)
npm install
```

---

## 🎉 Success Indicators

You'll know everything is working when:

✅ WordPress API returns JSON data when tested directly  
✅ `.env.local` file exists with correct URL  
✅ Development server runs without errors  
✅ Blog page shows WordPress posts  
✅ Featured images display correctly  
✅ Clicking a post shows full content  
✅ Categories and author info display  
✅ "Load More" button works (if you have many posts)  

---

## 📚 Additional Resources

- **Detailed Guide:** See `WORDPRESS-SETUP-GUIDE.md`
- **Quick Start:** See `QUICK-START.md`
- **API Documentation:** See `README-WORDPRESS-INTEGRATION.md`

---

**Need help?** Check the troubleshooting section or review the detailed guides!
