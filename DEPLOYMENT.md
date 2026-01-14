# 🚀 Deploy By Pilates lên Vercel

## Bước 1: Chuẩn bị Repository

### ✅ Git đã được khởi tạo
- Repository: `by-pilates`
- Initial commit: ✓ Hoàn tất (30 files, 6584+ lines)

### Push lên GitHub (nếu muốn)

```bash
# Tạo repository mới trên GitHub, sau đó:
git remote add origin https://github.com/YOUR_USERNAME/by-pilates.git
git branch -M main
git push -u origin main
```

---

## Bước 2: Deploy lên Vercel

### Option 1: Deploy từ GitHub (Khuyến nghị) ⭐

1. **Push code lên GitHub** (như trên)

2. **Truy cập Vercel:**
   - Vào https://vercel.com
   - Đăng nhập bằng GitHub account

3. **Import Project:**
   - Click "Add New Project"
   - Chọn repository `by-pilates`
   - Click "Import"

4. **Configure Project:**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build (tự động)
   Output Directory: .next (tự động)
   Install Command: npm install (tự động)
   ```

5. **Environment Variables (Optional):**
   - Add các biến môi trường từ `.env.example` nếu cần
   - `NEXT_PUBLIC_SITE_URL`: https://your-domain.vercel.app
   - Contact info, social media URLs, etc.

6. **Deploy:**
   - Click "Deploy"
   - Đợi 2-3 phút
   - ✨ Website live!

### Option 2: Deploy từ Local (CLI)

```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd d:\TEK4TV\pilates\my-seo\by-pilates
vercel

# Làm theo hướng dẫn:
# - Setup và link project
# - Vercel sẽ tự động detect Next.js
# - Deploy xong sẽ có URL

# Deploy production
vercel --prod
```

---

## Bước 3: Auto Deploy (Continuous Deployment)

### Khi deploy từ GitHub:

✅ **Auto Deploy được bật sẵn!**

Mỗi khi bạn push code:
- `git push` → Vercel tự động build & deploy
- Preview URL cho mỗi branch
- Production deploy từ branch `main`

### Workflow:

```bash
# Sau khi chỉnh sửa code
git add .
git commit -m "Update homepage hero section"
git push

# Vercel tự động:
# 1. Detect push event
# 2. Run build
# 3. Deploy lên production
# 4. Gửi notification
```

---

## Bước 4: Custom Domain (Optional)

1. **Trong Vercel Dashboard:**
   - Vào Project Settings
   - Tab "Domains"
   - Add domain: `bypilates.vn`

2. **Update DNS:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. **Vercel tự động setup:**
   - SSL certificate
   - CDN caching
   - Edge functions

---

## Bước 5: Environment Variables

### Trong Vercel Dashboard:

1. **Settings → Environment Variables**

2. **Add variables:**
   ```
   NEXT_PUBLIC_SITE_URL=https://bypilates.vn
   NEXT_PUBLIC_CONTACT_EMAIL=hello@bypilates.vn
   NEXT_PUBLIC_CONTACT_PHONE=0901234567
   ```

3. **Chọn environments:**
   - ✓ Production
   - ✓ Preview
   - ✓ Development

---

## 📊 Monitoring & Analytics

### Build trong Vercel Dashboard:

- ✅ Build logs real-time
- ✅ Deployment history
- ✅ Performance metrics
- ✅ Error tracking
- ✅ Analytics (nếu bật)

### Vercel Analytics (Optional):

```bash
npm install @vercel/analytics
```

Thêm vào `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🎯 Checklist Deploy

### Pre-deployment:
- [x] Git repository initialized
- [x] .gitignore configured
- [x] Initial commit created
- [x] All pages working locally
- [ ] Test build locally: `npm run build`
- [ ] Check for errors: `npm run lint`

### During deployment:
- [ ] Vercel account created
- [ ] Project imported/deployed
- [ ] Environment variables set
- [ ] Custom domain configured (if any)

### Post-deployment:
- [ ] Test all pages on production URL
- [ ] Check mobile responsiveness
- [ ] Verify contact form works
- [ ] Test navigation & links
- [ ] Check SEO meta tags
- [ ] Setup Google Analytics (optional)

---

## 🔧 Useful Commands

```bash
# Local development
npm run dev

# Test production build locally
npm run build
npm start

# Check for errors
npm run lint

# Vercel CLI commands
vercel          # Deploy to preview
vercel --prod   # Deploy to production
vercel logs     # View deployment logs
vercel domains  # Manage domains
vercel env      # Manage environment variables
```

---

## 📝 Next Steps

1. **Test local build:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Import GitHub repo
   - Or use `vercel` CLI

4. **Share URL:**
   - Production: `https://by-pilates.vercel.app`
   - Custom: `https://bypilates.vn`

---

## 🆘 Troubleshooting

### Build fails?
- Check `npm run build` locally first
- Review build logs in Vercel
- Ensure all dependencies in package.json

### Images not loading?
- Add images to `/public` folder
- Or use external URLs (Cloudinary, etc.)

### 404 errors?
- Check Next.js routing structure
- Ensure file names are correct

### Slow build times?
- Vercel caches `node_modules`
- Typical build: 1-2 minutes

---

**🎉 Your website is ready to deploy!**

Current status:
- ✅ Git initialized
- ✅ 30 files committed
- ✅ .gitignore configured
- ✅ Environment template created

Next: Push to GitHub và deploy to Vercel!
