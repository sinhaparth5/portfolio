# Portfolio Optimization Guide

## 🔴 Critical Issues (Do These First!)

### 1. Image Optimization - **HIGHEST PRIORITY**
**Current Problem:** Images are 1-3MB each = slow page load

**Solutions:**
```bash
# Option A: Use online tools
- TinyPNG.com - Compress images (free, 5MB limit)
- Squoosh.app - Convert to WebP/AVIF (by Google)

# Option B: Use CLI tools (recommended)
pnpm add -D sharp @astrojs/image-optimization

# Then compress images:
npx @astrojs/image-optimization public/images/*.png --quality 80 --format webp
```

**Target sizes:**
- Blog/Project images: ~100-200KB (currently 1-3MB) ❌
- Photo.jpg: Already good at 96KB ✅

### 2. Reduce API Calls
**Current:** Fetching GitHub data on every page load

**Solution:** Add caching
```javascript
// In About.astro - Cache for 1 hour
const CACHE_KEY = 'github-stats';
const CACHE_DURATION = 3600000; // 1 hour

let githubStats = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
if (!githubStats || Date.now() - githubStats.timestamp > CACHE_DURATION) {
  // Fetch fresh data
  githubStats = { ...data, timestamp: Date.now() };
  localStorage.setItem(CACHE_KEY, JSON.stringify(githubStats));
}
```

## 🟡 High Priority Optimizations

### 3. Remove Unused Dependencies
Check if all GSAP features are needed:
```bash
# Audit bundle size
pnpm run build
pnpm add -D @astrojs/bundle-analyzer

# Only import what you use from GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Remove any unused plugins
```

### 4. Add View Transitions
Enable instant page navigation:
```javascript
// In astro.config.mjs
export default defineConfig({
  experimental: {
    viewTransitions: true
  }
});
```

### 5. Optimize GitHub Contribution Heatmap
**Current:** External image from ghchart.rshah.org

**Options:**
- Remove it (simplest)
- Cache it on Cloudflare
- Build custom version with GitHub API

## 🟢 Nice to Have Optimizations

### 6. Add Analytics (Lightweight)
```bash
# Use Cloudflare Web Analytics (free, privacy-friendly)
# Add to Layout.astro <head>:
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

### 7. Lazy Load GSAP
Only load when needed:
```javascript
// In components, load GSAP dynamically
const { gsap } = await import('gsap');
const { ScrollTrigger } = await import('gsap/ScrollTrigger');
```

### 8. Prefetch Internal Links
Already implemented ✅ (hover prefetching)

### 9. Reduce Font Weights
```css
/* Use only needed weights */
- Inter: 400, 600 (not 300, 500, 700)
- Playfair: 400, 700 (not 500, 600, 800)
```

## 📊 Performance Targets

| Metric | Current (est.) | Target | Priority |
|--------|----------------|--------|----------|
| Image Size | 10-12MB | <1MB | 🔴 Critical |
| Lighthouse Score | ~60-70 | >90 | 🟡 High |
| FCP | ~3-4s | <1.8s | 🟡 High |
| LCP | ~4-6s | <2.5s | 🔴 Critical |
| CLS | Good | <0.1 | ✅ Good |

## 🛠️ Quick Wins Checklist

- [x] Font optimization (preconnect, dns-prefetch)
- [x] Security headers
- [x] Code minification
- [x] Lazy loading images
- [x] WCAG 2.2 AAA accessibility
- [ ] Compress images to WebP (USER ACTION NEEDED)
- [ ] Remove unused font weights
- [ ] Add Cloudflare Analytics
- [ ] Consider removing GitHub heatmap
- [ ] Test on PageSpeed Insights

## 🚀 How to Implement

### Step 1: Compress Images (Manual)
1. Go to https://squoosh.app
2. Upload each image from `public/images/`
3. Settings: WebP, Quality 80, Resize to max 1200px width
4. Download and replace files

### Step 2: Measure Performance
```bash
# Test locally
pnpm run build
pnpm run preview

# Then test on:
- PageSpeed Insights (https://pagespeed.web.dev/)
- WebPageTest (https://www.webpagetest.org/)
- Chrome DevTools Lighthouse
```

### Step 3: Deploy & Monitor
```bash
pnpm run deploy

# Check production performance:
https://parthsinha.com
```

## 📈 Expected Results After Optimization

**Before:**
- Page Size: ~15MB
- Load Time: 5-8s (3G)
- Lighthouse: ~65

**After:**
- Page Size: ~1-2MB
- Load Time: 1-3s (3G)
- Lighthouse: 90+

## 🎯 Immediate Action Items

1. **TODAY:** Compress all images to WebP (<200KB each)
2. **THIS WEEK:** Remove unused font weights
3. **OPTIONAL:** Add Cloudflare Analytics
4. **OPTIONAL:** Remove GitHub heatmap if unreliable

---

Need help with any of these? Let me know which optimization you want to tackle first!
