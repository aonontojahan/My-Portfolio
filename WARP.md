# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static portfolio website for Aononto Jahan Junnurain, built with vanilla HTML5, CSS3, and JavaScript. The site showcases personal information, education, skills, projects and contact details in a modern, responsive design .

## Development Commands

### Local Development
```bash
# Open the website in your default browser
start index.html    # Windows
open index.html     # macOS  
xdg-open index.html # Linux

# Or use Python's built-in server for local development
python -m http.server 8000     # Python 3
python -m SimpleHTTPServer 8000 # Python 2

# Or use Node.js serve if available
npx serve .
```

### File Operations
```bash
# View the project structure
tree .
# Or on Windows without tree command:
dir /s

# Edit main files
notepad index.html     # Windows
nano index.html       # Linux/macOS

# Check file sizes for optimization
dir *.* /s             # Windows
find . -type f -exec ls -lh {} \; # Linux/macOS
```

## Architecture & Structure

### Core Architecture
- **Static Website**: No build process or framework dependencies
- **Vanilla JavaScript**: Pure JS with no external libraries except CDN resources
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Single Page Application**: All content in one HTML file with smooth scrolling navigation

### File Structure
```
My-Portfolio/
├── index.html          # Main HTML file with all content
├── css/
│   └── style.css      # Complete stylesheet with responsive design
├── js/
│   └── script.js      # JavaScript for interactivity and animations
├── images/            # Static assets
│   ├── profile.jpg    # Profile photo (300x300px recommended)
│   ├── project*.png   # Project screenshots (400x250px)
│   └── PLACEHOLDER_IMAGES.txt
├── README.md          # Comprehensive documentation
└── SETUP_GUIDE.txt    # Quick setup instructions
```

### Key Components

#### Navigation System
- Fixed header with smooth scrolling
- Mobile hamburger menu with CSS animations
- Active section highlighting based on scroll position
- Backdrop blur effect on scroll

#### Interactive Features
- Typing animation for hero title on page load
- Scroll-based animations for sections (fade-in-up effects)
- Contact form with client-side validation
- Custom notification system for form feedback
- Back-to-top button with smooth scroll
- Project card hover effects with CSS transforms

#### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: Below 768px

### CSS Architecture
- **Reset styles** at the top for cross-browser consistency
- **Component-based structure**: Navigation, Hero, Sections, Forms
- **CSS Custom Properties**: Main colors defined as variables
  - Primary: `#3498db` (blue)
  - Secondary: `#2c3e50` (dark blue)
  - Accent: `#f39c12` (orange)
- **Animation system**: Keyframes for scroll animations and hover effects

### JavaScript Architecture
- **Event-driven**: DOM events for user interactions
- **Modular functions**: Separate functions for different features
- **Progressive enhancement**: Core functionality works without JS
- **Performance optimized**: Scroll event throttling and efficient DOM queries

## Content Management

### Adding New Projects
1. Update the projects section in `index.html`
2. Add project images to the `images/` folder (400x250px recommended)
3. Follow the existing project card structure with:
   - Project image and title
   - Description (keep concise)
   - Technology tags
   - Live demo and GitHub links

### Updating Personal Information
Key sections to customize in `index.html`:
- **Hero section**: Name, title, description
- **About section**: Personal information, email, university details
- **Education timeline**: Degrees, institutions, dates
- **Skills section**: Programming languages, tools, frameworks
- **Contact section**: Email, phone, social media links

### Image Requirements
- **Profile photo**: 300x300px, square ratio (displayed as circle)
- **Project images**: 400x250px, 16:10 aspect ratio
- **Format**: JPG or PNG, optimized for web

## Deployment Options

### GitHub Pages
```bash
# Create repository and push files
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Site will be available at: https://username.github.io/portfolio
```

### Netlify Drag & Drop
1. Zip the entire project folder
2. Go to netlify.com and drag the zip file
3. Get instant deployment with custom domain options

### Traditional Web Hosting
```bash
# Upload via FTP ensuring index.html is in root directory
# Common FTP commands:
ftp your-host.com
# Enter credentials, then:
mput *.html
mput css/*
mput js/*
mput images/*
```

## Contact Form Integration

The contact form currently shows success messages. To make it functional:

### Option 1: Formspree Integration
1. Sign up at formspree.io
2. Update form action: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
3. Modify JavaScript to handle actual submissions

### Option 2: EmailJS Integration
```javascript
// Add EmailJS SDK to index.html
// Update the contact form handler in script.js
emailjs.send('service_id', 'template_id', {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
});
```

## External Dependencies

### CDN Resources
- **Font Awesome 6.0.0**: Icons for social links and UI elements
- **Google Fonts**: Poppins font family (300-700 weights)
- **No JavaScript frameworks**: Pure vanilla JavaScript

### Performance Considerations
- All external resources loaded via CDN
- Images should be optimized (use tools like TinyPNG)
- CSS and JS are minification-ready
- Lazy loading implemented for scroll animations

## Browser Compatibility
- **Modern browsers**: Full functionality
- **IE11**: Basic functionality (no CSS Grid fallbacks implemented)
- **Mobile browsers**: Fully responsive design
- **Progressive enhancement**: Core content accessible without JavaScript

## Common Customization Tasks

### Color Scheme Changes
Main colors are defined in `css/style.css`. Update these values:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #f39c12;
}
```

### Adding Sections
1. Create HTML structure following existing patterns
2. Add corresponding navigation link
3. Implement scroll animations if needed
4. Update CSS with section-specific styles

### Animation Modifications
- Typing speed: Modify `typeWriter()` speed parameter
- Scroll animations: Adjust trigger points in `animateOnScroll()`
- Hover effects: Update CSS transform properties