# Research & Academic Solutions

A modern React application for research guidance and academic support services.

## Features

- ✨ Modern React with JSX components
- 🎨 Responsive design with CSS Grid/Flexbox
- 🌓 Light/Dark theme support
- 📱 Mobile-friendly layout
- ⚡ Built with Vite for fast development

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Process.jsx
│   ├── Support.jsx
│   ├── CTA.jsx
│   └── WhatsAppButton.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Components

- **Hero**: Main landing section with value proposition
- **About**: Company/service overview
- **Services**: Grid of service offerings
- **Process**: Step-by-step process visualization
- **Support**: Target audience and trust factors
- **CTA**: Call-to-action section
- **WhatsAppButton**: Floating contact button

## Customization

### Theme Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary: #073A59;
  --secondary: #F2C777;
  /* ... more variables ... */
}
```

### WhatsApp Number

Update the WhatsApp link in `src/components/CTA.jsx` and `src/components/WhatsAppButton.jsx`:

```javascript
href="https://wa.me/YOUR_WHATSAPP_NUMBER"
```

## License

MIT
