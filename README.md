# Bhagavad Gītā Website - Sanskrit.ie Clone

A modern, responsive web application showcasing the Bhagavad Gītā with an elegant UI design. This project is a complete clone/recreation of the original website at [sanskrit.ie/gita.php](https://sanskrit.ie/gita.php), built using modern web technologies.

## 🌟 Overview

This website provides an immersive experience for exploring the Bhagavad Gītā, featuring:
- **Beautiful Hero Section** with the Bhagavad Gītā title and open book imagery
- **18 Chapter Grid** displaying all chapters in an elegant diamond-tile layout
- **Responsive Navigation** with dropdown menus for Ayurveda, Yogasūtras, Upaniṣads, and Sanskrit
- **Footer Section** with social media links and developer credits
- **Authentic Design** matching the original Sanskrit.ie aesthetic with custom fonts and colors

## 🎨 Features

- **Hero Banner**: Stunning header with Bhagavad Gītā title and decorative book imagery
- **Chapter Navigation**: Interactive diamond-shaped tiles for all 18 chapters with hover effects
- **Dropdown Menus**: Comprehensive navigation for related spiritual texts and resources
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Custom Typography**: Uses Cormorant Garamond and Marcellus fonts for authentic feel
- **Social Media Integration**: Connect via Facebook, Twitter, YouTube, and Pinterest

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) v2.48.5
- **Frontend**: [Svelte](https://svelte.dev/) v5.43.8
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.17
- **Build Tool**: [Vite](https://vitejs.dev/) v7.2.2
- **Package Manager**: PNPM (workspace-enabled)

## 📁 Project Structure

```
client/
├── src/
│   ├── lib/
│   │   ├── assets/          # Images and static assets
│   │   │   ├── gita_banner.png
│   │   │   ├── gita_open.png
│   │   │   ├── gita_book.jpg
│   │   │   ├── gita logo.png
│   │   │   ├── logo.png
│   │   │   ├── pic1.jpg
│   │   │   └── footerimg.png
│   │   └── components/      # Reusable Svelte components
│   │       ├── ChaptersGrid.svelte
│   │       ├── Footer.svelte
│   │       └── Navbar.svelte
│   ├── routes/              # SvelteKit pages
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   └── layout.css
│   └── app.html             # HTML template
├── static/                  # Public static files
│   └── robots.txt
├── package.json
├── svelte.config.js
├── vite.config.js
└── pnpm-workspace.yaml
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **PNPM** (v8 or higher)

To install PNPM globally:
```bash
npm install -g pnpm
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gita
   ```

2. **Navigate to the client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

### Running the Application

#### Development Mode
Start the development server with hot-reload:
```bash
pnpm dev
```
The application will be available at `http://localhost:5173`

#### Production Build
Build the application for production:
```bash
pnpm build
```

#### Preview Production Build
Preview the production build locally:
```bash
pnpm preview
```

## 🎯 Key Components

### Navbar Component
- Sticky navigation bar with logo
- Dropdown menus for various sections (Ayurveda, Yogasūtras, Upaniṣads, Sanskrit)
- Search functionality
- Hover effects with animated underlines

### Hero Section
- Layered design with background image
- Bhagavad Gītā title with decorative elements
- Open book image positioned strategically
- "GITA CHAPTERS" title with underline

### ChaptersGrid Component
- 18 diamond-shaped chapter tiles (5 columns on desktop)
- Rotated 45° design with hover animations
- Numbered bands across each tile
- Responsive grid layout (3 columns tablet, 2 columns mobile)

### Footer Component
- "Connect" section with social media icons
- Wellbeing Svasti logo and branding
- Copyright information with developer credits
- Hover effects on links and icons

## 🎨 Design Details

### Color Palette
- **Primary Text**: `#2d2d2d`, `#3A4635`
- **Accent Gold**: `#d4c5a0`, `#E8C89F`
- **Red Accent**: `#B5302A`
- **Teal Links**: `#8AC7B5`, `#A9E1D4`
- **Green Hover**: `#4A7153`
- **Background**: `#f5f5f0`

### Typography
- **Headers**: Cormorant Garamond (300, 400, 500)
- **Navigation**: Marcellus & Marcellus SC
- **Body**: System fonts

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (5-column chapter grid)
- **Tablet**: 768px - 1023px (3-column chapter grid)
- **Mobile**: Below 768px (2-column chapter grid)

## 🌐 Original Website

This project is a clone of: [https://sanskrit.ie/gita.php](https://sanskrit.ie/gita.php)

All credit for the original design and concept goes to **Rutger Kortenhorst** and **Wellbeing Svasti**.

## 👨‍💻 Development

### Code Structure
- **Components**: Modular Svelte components in `src/lib/components/`
- **Routes**: Page-based routing using SvelteKit conventions
- **Styling**: Mix of Tailwind CSS utility classes and scoped component styles
- **Assets**: Images stored in `src/lib/assets/`

### Key Features Implementation
- Diamond tiles using CSS `rotate: 45deg` with counter-rotation for content
- Dropdown menus with hover state management
- Layered hero section with absolute positioning
- Sticky navigation with smooth transitions

## 🤝 Contributing

This is an educational clone project. For the original website and official contributions, please visit [sanskrit.ie](https://sanskrit.ie).

## 📄 License

This project is for educational purposes. All rights to the original design and content belong to their respective owners.

## 🙏 Credits

- **Original Design**: Rutger Kortenhorst - Wellbeing Svasti
- **Development**: Burning Desire Inclusive
- **Original Website**: [https://sanskrit.ie/gita.php](https://sanskrit.ie/gita.php)

---

**Note**: This is an educational clone project created to demonstrate modern web development techniques while preserving the beautiful design of the original Sanskrit.ie Gita page.
