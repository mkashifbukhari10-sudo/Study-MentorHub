# 🎯 WordPress Dashboard Guide: Step-by-Step

This guide shows you exactly what to do in your WordPress dashboard to connect with your React frontend.

---

## 📍 Step 1: Access WordPress Admin

1. **Open your browser**
2. **Go to:** `https://studymentorhub.online/wp-admin`
3. **Log in** with your WordPress credentials

---

## 📍 Step 2: Verify REST API is Enabled

### Option A: Quick Test (Recommended)
1. **Open a new browser tab**
2. **Visit:** `https://studymentorhub.online/wp-json/wp/v2/posts`
3. **Expected Result:** You see JSON data (even if it's just `[]`)

✅ **If you see JSON data, REST API is working!**

### Option B: Check Permalinks
1. In WordPress admin, go to: **Settings → Permalinks**
2. Make sure it's **NOT** set to "Plain"
3. Choose any other option (e.g., "Post name")
4. Click **Save Changes**

---

## 📍 Step 3: Create or Edit a Blog Post

### 3.1 Navigate to Posts
1. In WordPress admin sidebar, click **Posts**
2. Click **Add New** (to create) or click on existing post (to edit)

### 3.2 Fill in Post Details

**Title (Required):**
- Type your post title in the top field
- Example: "10 Proven Study Techniques That Actually Work"

**Content:**
- Write your full blog post content in the editor
- You can use:
  - Headings (H2, H3, etc.)
  - Paragraphs
  - Lists
  - Images
  - Links
  - Bold, italic, etc.

**Excerpt (Optional but Recommended):**
- Scroll down to find "Excerpt" section
- Or click "Screen Options" at top right → check "Excerpt"
- Write a short description (1-2 sentences)
- This appears on your blog listing page

---

## 📍 Step 4: Set Featured Image (IMPORTANT!)

### Why Featured Images Matter:
- They appear on your blog listing page
- Makes your blog look professional
- Attracts readers

### How to Set Featured Image:

1. **Scroll down** in the post editor
2. Find **"Featured Image"** section (usually on the right sidebar)
3. Click **"Set featured image"**
4. **Choose an option:**
   - **Upload Files:** Upload a new image from your computer
   - **Media Library:** Select an existing image
5. **Select your image**
6. Click **"Set featured image"** button
7. Image should now appear in the Featured Image section

✅ **Done!** Your featured image is set.

---

## 📍 Step 5: Assign Categories

### 5.1 Create Categories (First Time Only)

1. In WordPress admin, go to: **Posts → Categories**
2. On the left side, you'll see "Add New Category"
3. **Category Name:** Enter name (e.g., "Study Techniques")
4. **Slug:** Auto-generated (you can change it)
5. **Parent Category:** Leave empty (unless you want subcategories)
6. Click **Add New Category**

**Recommended Categories:**
- Study Techniques
- Time Management
- Memory & Focus
- Goal Setting
- Exam Preparation
- Productivity

### 5.2 Assign Categories to Posts

1. **While editing a post**, look at the right sidebar
2. Find **"Categories"** section
3. **Check the boxes** next to relevant categories
4. Or create a new category directly from here

✅ **Categories will appear as badges on your blog posts!**

---

## 📍 Step 6: Publish the Post

1. **Review your post:**
   - Title ✅
   - Content ✅
   - Featured Image ✅
   - Categories ✅
   - Excerpt ✅

2. **Click "Publish"** button (top right)
3. **Confirm** if asked

✅ **Your post is now live!**

---

## 📍 Step 7: Verify Post Appears in React App

1. **Go to your React app:** `http://localhost:3000/blog`
2. **Refresh the page** (F5)
3. **Your new post should appear!**

**What to check:**
- ✅ Post title shows
- ✅ Featured image displays
- ✅ Excerpt shows
- ✅ Category badge appears
- ✅ Date shows
- ✅ Clicking post opens detail page

---

## 📍 Step 8: Test Single Post Page

1. **Click on any post** in your React app
2. **Verify:**
   - ✅ Full content displays
   - ✅ Featured image shows at top
   - ✅ Author name shows (if available)
   - ✅ Date shows
   - ✅ Categories show
   - ✅ "Back to Blog" button works

---

## 🎨 Visual Guide: WordPress Post Editor

```
┌─────────────────────────────────────────────────┐
│  Add New Post                          [Publish]│
├─────────────────────────────────────────────────┤
│                                                 │
│  [Enter title here]                            │
│                                                 │
│  ┌─────────────────────────────────────────┐  │
│  │                                         │  │
│  │  Start writing or type / to choose a   │  │
│  │  block                                  │  │
│  │                                         │  │
│  │  [Your post content goes here]         │  │
│  │                                         │  │
│  └─────────────────────────────────────────┘  │
│                                                 │
│  ┌─────────────────────────────────────────┐  │
│  │  POST                                    │  │
│  │  ┌──────────────────────────────────┐  │  │
│  │  │ Categories                       │  │  │
│  │  │ ☐ Study Techniques               │  │  │
│  │  │ ☐ Time Management                │  │  │
│  │  │ ☐ Memory & Focus                 │  │  │
│  │  └──────────────────────────────────┘  │  │
│  │                                         │  │
│  │  ┌──────────────────────────────────┐  │  │
│  │  │ Featured Image                   │  │  │
│  │  │ [Set featured image]             │  │  │
│  │  └──────────────────────────────────┘  │  │
│  │                                         │  │
│  │  ┌──────────────────────────────────┐  │  │
│  │  │ Excerpt                           │  │  │
│  │  │ [Write excerpt...]                │  │  │
│  │  └──────────────────────────────────┘  │  │
│  └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

---

## 🔍 Quick Checklist for Each Post

Before publishing, make sure:

- [ ] **Title** is filled in
- [ ] **Content** is written
- [ ] **Featured Image** is set
- [ ] **Categories** are assigned
- [ ] **Excerpt** is written (optional but recommended)
- [ ] Post is **Published** (not Draft)

---

## 💡 Pro Tips

### Tip 1: Use Good Featured Images
- Use high-quality images
- Recommended size: 1200x630 pixels
- Use relevant images that match your content

### Tip 2: Write Compelling Excerpts
- Keep it short (1-2 sentences)
- Make it interesting to encourage clicks
- If you don't write one, WordPress auto-generates from content

### Tip 3: Organize with Categories
- Use consistent category names
- Don't create too many categories
- Assign 1-2 categories per post (not more)

### Tip 4: Use Headings in Content
- Use H2, H3 headings to structure your content
- These automatically create a table of contents on the detail page
- Makes content easier to read

### Tip 5: Preview Before Publishing
- Click "Preview" button to see how it looks
- Check on mobile view too
- Make sure everything looks good

---

## 🐛 Common Issues

### Issue: Featured Image Not Showing in React App
**Solution:**
1. Make sure featured image is set in WordPress
2. Check if image is publicly accessible
3. Refresh React app page
4. Check browser console for errors

### Issue: Post Not Appearing in React App
**Solution:**
1. Make sure post is **Published** (not Draft)
2. Refresh React app page
3. Check WordPress API directly: `https://studymentorhub.online/wp-json/wp/v2/posts`
4. Verify post appears in the API response

### Issue: Categories Not Showing
**Solution:**
1. Make sure categories are assigned to the post
2. Check if categories appear in WordPress API response
3. Refresh React app

---

## 📊 WordPress Admin Navigation

**Main Menu Items You'll Use:**

```
Posts
├── All Posts (view/edit all posts)
├── Add New (create new post)
└── Categories (manage categories)

Media
└── Library (view all images/files)

Settings
└── Permalinks (verify REST API settings)
```

---

## ✅ Success Checklist

After following this guide, you should have:

- [ ] Created/edited posts in WordPress
- [ ] Set featured images for posts
- [ ] Assigned categories to posts
- [ ] Published posts
- [ ] Verified posts appear in React app
- [ ] Tested single post pages
- [ ] Everything working correctly!

---

## 🎉 You're Done!

Your WordPress dashboard is now connected to your React frontend!

**Next Steps:**
- Create more blog posts
- Add more categories
- Customize your content
- Deploy to production (see deployment guide)

---

**Need Help?**
- Check `STEP-BY-STEP-CHECKLIST.md` for detailed troubleshooting
- Review `WORDPRESS-SETUP-GUIDE.md` for technical details
