# TechFlow - A/B Testing Demo Site

A modern, responsive dummy website perfect for A/B testing purposes. Built with clean HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient hero section
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Contact form, smooth scrolling, mobile menu
- **A/B Testing Ready**: Built-in utilities for variant tracking and analytics
- **Performance Optimized**: Lightweight code with smooth animations
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📁 Project Structure

```
example-site-2/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and A/B testing utilities
└── README.md          # This file
```

## 🎯 A/B Testing Features

The site includes built-in A/B testing utilities:

- **Variant Assignment**: Automatically assigns visitors to variant A or B
- **Event Tracking**: Track user interactions and conversions
- **Local Storage**: Maintains consistent experience across sessions
- **Analytics Ready**: Easy integration with Google Analytics, Mixpanel, etc.

### A/B Testing Usage

```javascript
// Track conversions
window.ABTest.trackConversion("form_submission");

// Get current variant
const variant = window.ABTest.getVariant(); // Returns 'A' or 'B'

// Apply variant-specific changes
window.ABTest.applyVariant();
```

## 🛠 Setup Instructions

### Option 1: Simple File Serving

1. **Download the files** to your local machine
2. **Open index.html** in your web browser
3. That's it! The site will work locally.

### Option 2: Local Development Server

For better testing and development:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy to Web

Deploy to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Firebase Hosting**: Use Firebase CLI

## 📊 Analytics Integration

To integrate with your analytics platform, modify the `trackEvent` function in `script.js`:

### Google Analytics 4

```javascript
function trackEvent(action, category, label) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: 1,
  });
}
```

### Mixpanel

```javascript
function trackEvent(action, category, label) {
  mixpanel.track(action, {
    category: category,
    label: label,
  });
}
```

## 🎨 Customization

### Colors

Main brand colors are defined in CSS variables. Update these in `styles.css`:

- Primary Blue: `#2563eb`
- Gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Content

- Update text content in `index.html`
- Modify company name, features, and contact information
- Replace placeholder images with actual graphics

### A/B Test Variants

Add variant-specific changes in the `applyVariant` function:

```javascript
applyVariant: function() {
    const variant = this.getVariant();
    if (variant === 'B') {
        // Variant B changes
        document.querySelector('.btn-primary').textContent = 'Start Now';
        document.querySelector('.hero h2').textContent = 'Alternative Headline';
    }
}
```

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 767px and below

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Performance

- **Lightweight**: ~15KB total (HTML + CSS + JS)
- **Fast Loading**: Optimized images and minimal dependencies
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **SEO Friendly**: Semantic HTML structure

## 🤝 Contributing

This is a demo site, but feel free to:

1. Fork the repository
2. Make improvements
3. Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

---

**Perfect for**: Landing page A/B tests, conversion optimization, user experience testing, and marketing experiments.

**Ready to use**: Just open `index.html` in your browser and start testing!
# new_testing_site
# new_testing_site
# new_testing_site
