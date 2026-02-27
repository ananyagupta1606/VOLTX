# ⚡ VOLTX Electronics Store

A modern electronics e-commerce UI built with React + Tailwind CSS.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## Project Structure

```
src/
├── App.jsx                    # Main app — holds all state
├── main.jsx                   # React entry point
├── index.css                  # Tailwind import
├── data/
│   └── products.js            # Product data & constants
└── components/
    ├── Navbar.jsx             # Sticky navbar with search, cart, auth
    ├── HeroBanner.jsx         # Hero section with floating cards
    ├── CategoryBar.jsx        # Sticky category filter chips
    ├── ProductGrid.jsx        # Responsive product grid
    ├── ProductCard.jsx        # Individual product card
    ├── CartSidebar.jsx        # Sliding cart drawer
    ├── AuthModal.jsx          # Sign in / Sign up modal
    ├── ProductDetail.jsx      # Product detail popup
    ├── Toast.jsx              # Toast notifications
    └── Footer.jsx             # Site footer
```

## Features

- 🔍 Live search in navbar
- 🗂️ Category filtering
- 🛒 Cart with qty controls
- 🔐 Sign in / Sign up flow
- 📦 Product detail modal
- 📱 Fully responsive
- 🌙 Dark theme throughout
