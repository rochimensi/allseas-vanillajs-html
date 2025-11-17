# AllSeas - Landing Page

A modern, responsive landing page for AllSeas travel agency showcasing travel packages, cruises, destinations, and personalized travel experiences.

## 📋 Project Overview

AllSeas is a travel agency landing page built with vanilla HTML, CSS, and JavaScript. The site features a clean, modern design with smooth animations, a responsive mobile menu, an image carousel, and a contact form integration.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS** - CSS processing with Autoprefixer
- **Vanilla JavaScript** - No frameworks, pure JS for interactivity
- **Formspree** - Contact form submission handling
- **Custom Fonts**:
  - Geometos Soft (Regular, Extra Light)
  - Outfit (Extra Light)

## 📁 Project Structure

```
allseas/
├── dist/                    # Production build output
│   ├── fonts/              # Compiled font files
│   ├── images/             # Optimized images
│   ├── index.html          # Production HTML
│   └── styles.css          # Compiled & minified CSS
├── fonts/                  # Source font files
├── images/                 # Source images
│   ├── about/             # About section images
│   ├── brands/            # Partner brand logos
│   ├── contact/           # Contact section assets
│   ├── cruises/           # Cruise-related images
│   ├── decorative/        # Background elements
│   ├── destinations/      # Destination images
│   ├── experiences/       # Experience section images
│   ├── footer/            # Footer assets
│   ├── header/            # Header/logo assets
│   ├── hero/              # Hero carousel images
│   └── packages/          # Package images
├── scripts/
│   └── build.js           # Build script for production
├── src/
│   └── styles.css         # Source Tailwind CSS file
├── index.html             # Main HTML file
├── styles.css             # Compiled CSS (dev)
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## ✨ Features

### Core Features
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Sticky Navigation** - Header stays visible while scrolling
- **Mobile Menu** - Hamburger menu with smooth animations for mobile devices
- **Image Carousel** - Auto-advancing hero carousel (2-second intervals)
- **Scroll Animations** - Intersection Observer-based fade-in animations
- **Contact Form** - Integrated with Formspree for form submissions
- **Smooth Scrolling** - Native smooth scroll behavior for anchor links

### Sections
1. **Header/Navigation** - Sticky navbar with logo and navigation links
2. **Hero Banner** - Main banner with call-to-action text
3. **Image Carousel** - Rotating destination images
4. **Brand Partners** - Logos for Relais Chateaux, Leading Hotels, Small Luxury Hotels
5. **Experiences** - Personalized travel experiences section
6. **Top Destinations 2025** - Featured destinations (Morocco, Japan, Turkey)
7. **Packages** - Travel package showcase
8. **Cruises** - Cruise line partnerships (Disney, Norwegian, Royal Caribbean)
9. **About** - Company information and history
10. **Contact** - Contact form with validation
11. **Footer** - Company info, social media links, copyright

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rochimensi/allseas-vanillajs-html
cd allseas
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

This will:
- Compile Tailwind CSS
- Watch for CSS changes
- Start live-server on port 3000
- Open the site in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server with CSS watch mode
- `npm run build:css` - Compile Tailwind CSS once
- `npm run build:css:watch` - Watch and compile Tailwind CSS on changes
- `npm run build` - Build for production (compiles CSS, copies assets to `dist/`)
- `npm run preview` - Build and preview production version

## 🎨 Design System

### Colors
- **Primary**: `#271F5B` (Deep purple)
- **Surface**: `#3B3566` (Lighter purple for backgrounds)

### Typography
- **Headings**: Geometos Soft (Extra Light)
- **Body Text**: Outfit (Extra Light)
- **Letter Spacing**: 0.1rem - 0.2rem

### Breakpoints
- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

## 🔧 Configuration

### Tailwind Config
The project uses a custom Tailwind configuration with:
- Custom color palette (primary, surface)
- Custom font families (geometos, outfit)
- Content paths for HTML and JS files

### Formspree Integration
The contact form is configured to submit to Formspree endpoint:
- Endpoint: `https://formspree.io/f/xldaavpa`
- Subject: "Nova mensagem do site AllSeas"
- Includes built-in spam protection

## 📦 Build Process

The build script (`scripts/build.js`) performs the following:
1. Cleans the `dist/` directory
2. Compiles and minifies Tailwind CSS
3. Copies `index.html` to `dist/`
4. Copies `images/` directory to `dist/images/`
5. Copies `fonts/` directory to `dist/fonts/`

## 🔄 Migration to Next.js

### Recommended Approach

#### 1. Project Setup
```bash
npx create-next-app@latest allseas-nextjs
# Choose: TypeScript, App Router, Tailwind CSS, ESLint
```

#### 2. Key Migration Steps

**File Structure:**
- Convert `index.html` → `app/page.tsx` (App Router) or `pages/index.tsx` (Pages Router)
- Move styles to `app/globals.css` or `styles/globals.css`
- Convert inline `<script>` → React components with `useEffect` hooks
- Move images to `public/images/` (Next.js public folder)
- Move fonts to `public/fonts/` or use Next.js font optimization

**Components to Create:**
- `components/Header.tsx` - Navigation bar
- `components/Hero.tsx` - Hero banner and carousel
- `components/Brands.tsx` - Brand partners section
- `components/Experiences.tsx` - Experiences section
- `components/Destinations.tsx` - Top destinations
- `components/Packages.tsx` - Packages section
- `components/Cruises.tsx` - Cruises section
- `components/About.tsx` - About section
- `components/Contact.tsx` - Contact form
- `components/Footer.tsx` - Footer

**JavaScript Functionality:**
- Mobile menu toggle → React state (`useState`)
- Carousel → React state with `useEffect` for auto-advance
- Scroll animations → `framer-motion` or `react-intersection-observer`
- Smooth scrolling → Next.js `Link` component with scroll behavior
- Form submission → Server Action or API route

**Styling:**
- Keep Tailwind CSS configuration
- Move custom CSS to global stylesheet
- Use Next.js Image component for optimized images
- Configure font loading with `next/font` for custom fonts

**Optimizations:**
- Use Next.js `Image` component for all images
- Implement font optimization with `next/font/local`
- Add metadata for SEO (`metadata` export in App Router)
- Consider ISR (Incremental Static Regeneration) for static content
- Add loading states and error boundaries

#### 3. Dependencies to Add
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^10.0.0" // For animations
  }
}
```

#### 4. Form Handling Options
- **Server Actions** (App Router) - Recommended for form submissions
- **API Routes** - Alternative approach
- Keep Formspree integration or migrate to server-side handling

### Benefits of Next.js Migration
- ✅ Server-side rendering for better SEO
- ✅ Image optimization out of the box
- ✅ Font optimization
- ✅ Better code organization with components
- ✅ TypeScript support
- ✅ API routes for backend functionality
- ✅ Better performance with automatic code splitting
- ✅ Built-in routing

## 📝 Notes

- The site is currently in Portuguese (Brazilian)
- All images should be optimized before production deployment
- Formspree endpoint may need to be updated for production
- Consider adding analytics (Google Analytics, etc.)
- Add meta tags for social media sharing (Open Graph, Twitter Cards)

## 📄 License

© 2023 AllSeas. Todos os direitos reservados.


