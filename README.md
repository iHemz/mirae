# HTML/CSS/TypeScript Project

A modern web project template using HTML, CSS, and TypeScript.

## Project Structure

```
├── src/
│   ├── assets/        # Images, fonts, and other static assets
│   ├── styles/        # CSS files
│   ├── scripts/       # TypeScript files
│   └── index.html     # Main HTML file
├── dist/              # Compiled output
├── package.json       # Project dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Build the project:

```bash
npm run build
```

4. Watch for changes during development:

```bash
npm run watch
```

## Features

- Modern TypeScript configuration
- CSS reset and base styles
- Development server with live reload
- Source maps for debugging
- Modular TypeScript architecture

## Development

- The development server will automatically reload when you make changes
- TypeScript files are in `src/scripts/`
- CSS files are in `src/styles/`
- Static assets should be placed in `src/assets/`
