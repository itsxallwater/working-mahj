# Working Mahj Website - Project Documentation

## 📋 Project Overview

**Site Name:** Working Mahj
**Tagline:** Phoenix's first mahjong studio for working moms
**Location:** Phoenix, AZ
**Contact:** workingmahj@gmail.com
**Social:** @workingmahj

---

## 🏗️ Project Structure

```
working-mahj-site/
├── working-mahj.html    # Main HTML file
├── styles.css           # All CSS styles
├── script.js            # All JavaScript
├── logo.jpg             # Site logo image
├── TODO.md              # Task tracking
└── CLAUDE.md            # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#4DA6FF` (--blue)
- **Blue Dark:** `#3B8DE0` (--blue-dark)
- **Blue Deep:** `#2A6CB5` (--blue-deep)
- **Gold:** `#F0B429` (--gold)
- **Gold Light:** `#FFD76E` (--gold-light)
- **Dark:** `#1A2A3A` (--dark)
- **Cream:** `#FFF9ED` (--cream)
- **White:** `#FFFFFF`

### Typography
- **Headings:** 'Baloo 2' (cursive, playful)
- **Body:** 'DM Sans' (clean, readable)
- **Chinese Characters:** 'Noto Sans SC'

---

## 📄 Site Sections

1. **Hero** - Logo, tagline, CTA buttons, scroll indicator
2. **About** - Value propositions, testimonial from Sarah K.
3. **Rates** - 5 service offerings with pricing
4. **Contact** - Form with Web3Forms integration

---

## 🛠️ Key Features

### Navigation
- Fixed nav that becomes opaque on scroll
- Auto-highlights active section using IntersectionObserver
- Smooth scroll to sections

### Hero Section
- Animated logo with spin on hover (debounced)
- Floating mahjong tiles in background
- Pulsing scroll indicator (hides near About section)

### Forms
- **Service:** Web3Forms (free, unlimited)
- **Email:** workingmahj@gmail.com
- **Features:** Validation, success/error messages, loading states

### Animations
- Hero elements fade in on load
- Scroll indicator pulses and floats
- Logo spins on hover (600ms cooldown)
- Scroll-to-top button appears after 400px scroll
- Fade-up animations for content sections

---

## ⚙️ Technical Details

### CSS Architecture
- CSS Variables for theming
- Mobile-first responsive design
- Breakpoint: 600px for mobile adjustments
- Animations: float, pulse, scrollArrow, spin

### JavaScript Features
- **No dependencies** - Pure vanilla JS
- IntersectionObserver for section detection
- Smooth scroll behavior
- Debounced logo spin animation
- Form handling with Fetch API

### Performance Considerations
- External CSS/JS files (cached separately)
- Minimal dependencies (only Google Fonts)
- Optimized animations (transform/opacity)
- Lazy-loaded fade-up effects

---

## 📧 Contact Form Setup

**Service:** Web3Forms
**Status:** ⚠️ Needs access key (see TODO.md)

**Hidden Fields:**
- `access_key`: Web3Forms API key (needs to be added)
- `subject`: "New inquiry from Working Mahj website"
- `from_name`: "Working Mahj Contact Form"

**User Fields:**
- Name (required)
- Email (required)
- Interest selection (required)
- Message (optional)

---

## 🎯 Pricing Structure

| Service | Duration | Price | Notes |
|---------|----------|-------|-------|
| Group Beginner | 3 hours | $75/person | Includes NMJL card ($14 value) |
| Refresher | 2 hours | $50/person | For experienced players |
| Guided Play | 2 hours | $150 flat | Follow-up session |
| Private Events | Up to 4h | Custom | Parties/team building |
| NMJL Card | - | $14 | 2026 edition (April release) |

---

## 🚀 Deployment Notes

### Before Going Live:
1. ✅ Add Web3Forms access key (see TODO.md)
2. ✅ Test contact form thoroughly
3. ⬜ Optimize logo.jpg file size
4. ⬜ Add favicon
5. ⬜ Test on multiple devices/browsers
6. ⬜ Verify all links work
7. ⬜ Check mobile responsiveness

### Hosting Options:
- **Netlify** (recommended) - Free, easy deployment, custom domain
- **Vercel** - Similar to Netlify
- **GitHub Pages** - Free, good for simple sites
- **Any static host** - Works anywhere

---

## 📝 Content Notes

### Key Messages
- Mahjong for busy moms
- Phoenix/Valley-wide locations
- Beginner-friendly approach
- Community building focus
- Flexible scheduling

### Target Audience
- Working moms in Phoenix area
- Beginners (no experience needed)
- Looking for social connection
- Time-conscious

---

## 🔧 Maintenance

### Regular Updates Needed:
- NMJL card year (currently 2026)
- Testimonials (currently just Sarah K.)
- Pricing (review annually)
- Copyright year in footer

### Monitor:
- Contact form submissions
- Email deliverability
- Web3Forms quota (unlimited but check)
- Mobile responsiveness on new devices

---

## 📱 Social Media

**Instagram:** [@workingmahj](https://instagram.com/workingmahj) (only active social account)
**Email:** workingmahj@gmail.com
**Location Tag:** "Serving the greater Phoenix area"

**Note:** Instagram is currently the only social media presence. Link is clickable on the website.

---

## 🐛 Known Issues / Limitations

**Current:**
- Web3Forms access key not yet added (site functional but form won't send)

**Future Considerations:**
- Add actual Instagram integration if feed needed
- Consider adding photo gallery
- May need backend if booking system required
- Consider adding Google Maps integration for locations

---

## 💡 Design Decisions

1. **Single-page design** - Better UX for small service business
2. **Blue & Gold color scheme** - Professional yet warm
3. **Mahjong tile indicators** - Thematic consistency
4. **No backend needed** - Keeps it simple and free to host
5. **Mobile-first** - Most users will browse on phones
6. **Minimal dependencies** - Faster load, easier maintenance

---

Last Updated: 2026-02-14
