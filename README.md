# HTML/CSS/TypeScript Project

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/ihemz/mirae)

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
yarn install
```

2. Start the development server:

```bash
yarn dev
```

3. Build the project:

```bash
yarn build
```

4. Watch for changes during development:

```bash
yarn watch
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
