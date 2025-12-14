# Quick Start: WordPress Connection

## 🚀 5-Minute Setup

### 1. Verify WordPress API Works
Open in browser:
```
https://studymentorhub.online/wp-json/wp/v2/posts?per_page=1
```
Should show JSON data.

### 2. Set Environment Variable

**Create `.env.local` file in `study-mentor-frontend` folder:**
```env
NEXT_PUBLIC_WP_API_URL=https://studymentorhub.online/wp-json/wp/v2
```

### 3. Restart Dev Server
```bash
cd study-mentor-frontend
npm run dev
```

### 4. Test It
- Visit: `http://localhost:3000/blog`
- You should see WordPress posts!

### 5. For Vercel Production
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_WP_API_URL` = `https://studymentorhub.online/wp-json/wp/v2`
3. Redeploy

---

## ✅ Checklist

- [ ] WordPress API accessible (test URL above)
- [ ] `.env.local` file created with API URL
- [ ] Dev server restarted
- [ ] Posts visible on `/blog` page
- [ ] Can click posts to see detail page

---

## 🐛 Troubleshooting

**Posts not showing?**
- Check browser console (F12)
- Verify `.env.local` exists
- Restart dev server
- Check Network tab for API calls

**Need detailed guide?**
See `WORDPRESS-SETUP-GUIDE.md`
