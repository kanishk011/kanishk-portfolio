# Kanishk M — Portfolio

A modern, single-page developer portfolio built with React, TypeScript, and Material UI. Features smooth animations, dark/light theme toggle, glassmorphism design, and a working contact form.

## Live Preview

https://itskanishk.netlify.app

## Tech Stack

- **React 19** + **TypeScript** — type-safe UI components
- **Vite** — fast dev server and optimized builds
- **Material UI v5** — component library and theming
- **Framer Motion** — scroll-triggered animations, stagger effects, hover interactions
- **Web3Forms** — contact form email delivery (no backend needed)
- **Inter** — clean, professional typography

## Features

- Responsive single-page layout (mobile, tablet, desktop)
- Dark / Light theme with localStorage persistence
- Glassmorphism cards with backdrop blur
- Animated skill bars triggered on scroll
- Animated stat counters (requestAnimationFrame-based)
- Scroll-spy navigation with spring-animated active indicator
- Contact form with real-time validation and email delivery
- Resume PDF download button
- SEO meta tags and Open Graph support
- Accessible — aria-labels on all interactive elements

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Fixed navbar with scroll spy + theme toggle
│   ├── common/                 # Reusable components
│   │   ├── AnimatedContainer   # Stagger animation wrapper
│   │   ├── AnimatedCounter     # rAF-based number counter
│   │   └── GlassCard           # Glassmorphism card
│   └── sections/               # Page sections
│       ├── Hero                # Full-viewport hero with CTA buttons
│       ├── About               # Bio + animated stat counters
│       ├── Skills              # 4 skill categories with progress bars
│       ├── Experience          # Work + education timeline
│       ├── Contact             # Contact info + form (Web3Forms)
│       └── Footer              # Copyright + social links
├── context/ThemeContext.tsx     # Dark/light mode provider
├── data/mockData.ts            # All portfolio data
├── hooks/useThemeMode.ts       # Theme convenience hook
├── theme/                      # MUI theme configuration
├── types/index.ts              # TypeScript interfaces
└── utils/                      # Constants, animations, icon map
```

## Customization

All portfolio data is in `src/data/mockData.ts` — update your name, bio, skills, experience, and contact info there.

To connect the contact form, replace the `WEB3FORMS_KEY` in `src/components/sections/Contact.tsx` with your own key from [web3forms.com](https://web3forms.com).

## License

MIT
