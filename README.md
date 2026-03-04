# Pet & Food - Premium Pet Food Brand Website

A sophisticated, ultra-minimalist single-page website for a premium pet food brand, built with Vue 3, Tailwind CSS, and GSAP animations.

## Features

- **Ultra-minimalist Design**: High fashion aesthetic with editorial design elements
- **Strict Black & White Palette**: Deep black (#050505), graphite (#1a1a1a), pure white (#ffffff)
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: GSAP-powered animations with cubic-bezier easing
- **Parallax Effects**: Subtle parallax scrolling in the hero section
- **Custom Cursor**: Elegant custom cursor with hover effects (desktop only)
- **Responsive Design**: Mobile-first approach without losing the premium feel
- **Micro-interactions**: Delicate hover effects and scroll-triggered animations

## Project Structure

```
pet-food-page/
├── src/
│   ├── assets/
│   │   └── index.css          # Global styles and Tailwind imports
│   ├── components/
│   │   └── CustomCursor.vue   # Custom cursor component
│   ├── router/
│   │   └── index.ts          # Vue Router configuration
│   ├── views/
│   │   └── HomeView.vue      # Main page with all sections
│   ├── App.vue               # Root component
│   └── main.ts               # Application entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── package.json             # Project dependencies
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

## Preview

Preview the production build:
```bash
npm run preview
```

## Design Philosophy

### Color Palette
- **Deep Black**: #050505 - Primary background
- **Graphite**: #1a1a1a - Secondary backgrounds and cards
- **Pure White**: #ffffff - Text and accents

### Typography
- **Headings**: Playfair Display - Elegant serif font for luxury feel
- **Body**: Inter - Clean sans-serif for readability

### Animation Principles
- Slow, smooth transitions with cubic-bezier easing
- No abrupt movements or jumps
- Subtle parallax effects
- Fade-in + slide-up animations on scroll
- Delicate hover effects with scale transformations

### Layout
- Generous whitespace ("air")
- Asymmetric grid system
- Large imagery with focus on details
- Minimal UI elements (no shadows, gradients, or rounded corners > 4px)

## Sections

1. **Hero Section**: Full-screen immersion with parallax background
2. **Brand Philosophy**: Manifesto about "Culinary nutrition for the elite"
3. **Product Collection**: 3 premium positions with hover effects
4. **Footer**: Minimal contact information and social links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized image loading
- Smooth scrolling without jank
- Efficient GSAP animations
- Minimal bundle size with tree-shaking

## License

ISC