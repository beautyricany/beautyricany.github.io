# Permanent Beauty Website

Professional cosmetics studio website featuring permanent makeup services.

## Features

- **5 Pages**: Home, About, Services, Gallery, Contact
- **Responsive Design**: Works on all devices
- **Modern Color Scheme**: Black, Red, and White theme
- **Interactive Elements**: Mobile navigation, gallery filtering, form validation
- **TypeScript**: Type-safe JavaScript for better code quality

## Project Structure

```
PermanentBeauty/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── src/
│   └── main.ts         # TypeScript source
├── dist/
│   └── main.js         # Compiled JavaScript (generated)
├── assets/
│   └── images/         # Logo and images
├── package.json
└── tsconfig.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Compile TypeScript

```bash
npm run build
```

Or watch for changes:

```bash
npm run watch
```

### 3. Add Your Logo

Place your logo image in `assets/images/logo.png`

### 4. Run the Website

Option A - Using the built-in HTTP server:
```bash
npm run serve
```

Then open http://localhost:8080 in your browser.

Option B - Using VS Code Live Server extension:
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Option C - Simply open `index.html` in your browser (some features may not work)

## Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --color-primary: #C41E3A;      /* Red */
    --color-secondary: #000000;     /* Black */
    --color-accent: #FFFFFF;        /* White */
}
```

### Content

- Update text in HTML files
- Modify services, prices, and descriptions
- Add your team member information
- Update contact details

### Images

- Replace placeholder images with real photos
- Update gallery items in `gallery.html`
- Add service images in `services.html`

## Pages Overview

### Home (index.html)
- Hero section with call-to-action
- Features showcase
- Popular services preview
- Call-to-action section

### About (about.html)
- Company story
- Team members
- Values and mission

### Services (services.html)
- Detailed service descriptions
- Pricing information
- Process steps

### Gallery (gallery.html)
- Filterable image gallery
- Client testimonials

### Contact (contact.html)
- Contact form with validation
- Contact information
- Map location
- FAQ section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development

The website uses:
- HTML5 for structure
- CSS3 for styling (with CSS Grid and Flexbox)
- TypeScript for interactivity
- No external frameworks (vanilla code)

## License

Copyright © 2025 Permanent Beauty. All rights reserved.
