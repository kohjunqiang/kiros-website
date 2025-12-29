# KIROS Landing Page

Static HTML landing page for KIROS with Vercel Serverless Functions for email form submission.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Resend account (for email functionality)

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**

   Edit `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

   Get your API key from: https://resend.com/api-keys

3. **Start development server**
   ```bash
   npm run dev
   ```

   Or using Vercel CLI:
   ```bash
   npm install -g vercel
   vercel dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
/
├── index.html              # Main landing page
├── styles.css              # Converted CSS (~14KB)
├── script.js               # Form handling JavaScript
├── package.json            # Dependencies
├── vercel.json             # Vercel configuration
├── .env.local              # Environment variables (gitignored)
├── .gitignore              # Git ignore rules
├── favicon.svg             # Browser favicon
├── api/
│   └── send-email.js       # Serverless function for email
├── assets/
│   └── images/             # Placeholder images (replace with real assets)
│       ├── hero-background.svg
│       ├── logo-kiros.svg
│       ├── logo-icon.svg
│       └── illustration-*.svg (6 files)
└── archive/
    ├── figma-home.css      # Original Figma export (6.2MB)
    ├── figma-features.css
    └── figma-about.css
```

## 📧 Email Setup (Resend)

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create an account

2. **Get API Key**
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Verify Domain (Production)**
   - Add `kiros.sg` to Resend
   - Add DNS records as instructed
   - Update `from` email in `/api/send-email.js`:
     ```js
     from: 'KIROS Access Request <noreply@kiros.sg>'
     ```

4. **Testing without domain**
   - Use Resend's onboarding domain for testing
   - Emails will have Resend branding
   - Perfect for development/testing

## 🎨 Replace Placeholder Assets

All placeholder assets are in `/assets/images/`. Replace with real assets:

### Critical Assets
- `hero-background.svg` → 1440×480px hero image (JPG/WebP)
- `logo-kiros.svg` → Full KIROS logo
- `logo-icon.svg` → Icon only (32×32px)
- `favicon.svg` → Browser favicon

### Illustrations (6 total)
- `illustration-features.svg` → 360×440px
- `illustration-product.svg` → 360×440px
- `illustration-benefits.svg` → 360×440px
- `illustration-security.svg` → 660×600px
- `illustration-workflow.svg` → 660×600px
- `illustration-collaboration.svg` → 660×600px

See implementation plan for detailed asset specifications and color themes.

## 🚢 Deployment to Vercel

### Option 1: Via Vercel Console (Recommended)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository
4. Configure:
   - Framework Preset: **Other** (static site)
   - Build Command: *(leave empty)*
   - Output Directory: `.` (root)
5. Add Environment Variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
6. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## ✅ Testing Checklist

Before deploying to production:

- [ ] Form validation works (empty fields, invalid email)
- [ ] Email sends successfully
- [ ] Success/error messages display correctly
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] Fonts render properly (Inter, Anton)
- [ ] Mobile responsive (375px, 768px, 1440px)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

## 📝 Development Notes

### CSS Size Reduction
- **Original Figma export**: 6.2MB
- **Production CSS**: 14KB (99.8% reduction)
- Removed 38,400 decorative elements and simplified absolute positioning

### Form Submission Flow
1. User fills form in `index.html`
2. JavaScript validates and submits to `/api/send-email`
3. Serverless function validates and sends via Resend
4. User sees success/error message

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px (max 1440px)

## 🔧 Troubleshooting

### Email not sending
- Check `.env.local` has correct `RESEND_API_KEY`
- Verify API key is active in Resend dashboard
- Check browser console for errors
- View Vercel function logs

### Form submission errors
- Open browser DevTools → Network tab
- Check POST request to `/api/send-email`
- Look for CORS errors or 400/500 responses

### Local development not working
- Ensure you're using `vercel dev` (not just opening HTML file)
- Check Node.js version is 18+
- Verify dependencies are installed (`npm install`)

## 📞 Support

For issues or questions:
- Email: hello@kiros.sg
- Check implementation plan in `.claude/plans/`

## 📄 License

© 2026 Kiros Technology Pte Ltd. All Rights Reserved.
