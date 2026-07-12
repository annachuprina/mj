# MJ Styles

A curated gallery of Midjourney style references by Anna Chuprina.

**Live site:** [annachuprina.github.io/mj](https://annachuprina.github.io/mj/)

## About

MJ Styles pairs example images with their Midjourney `--sref` codes. Visitors can browse the collection, see the prompt used for each image, and copy a style reference directly into a Midjourney prompt.

The gallery uses a date-seeded shuffle, so its order changes once per day while remaining consistent during that day.

## Features

- Responsive gallery of Midjourney style examples
- Daily seeded gallery order based on the visitor's local date
- One-click copying of `--sref` codes
- Prompt labels for gallery images
- Loading progress for priority images
- Optimized JPG gallery assets
- Static GitHub Pages deployment with no backend

## Getting Started

### Requirements

- Node.js
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

The generated site is written to `dist/`.

## Deployment

Deploy the production build to the repository's `gh-pages` branch:

```bash
npm run deploy
```

The Vite base path is configured as `/mj/` for the GitHub Pages project URL.

## Using the Gallery

1. Browse the style examples.
2. Select **COPY STYLE** below an image.
3. Paste the copied `--sref` value into a Midjourney prompt.

Example:

```text
your prompt here --sref 7440192674
```

Some entries combine multiple style references in one copied value.

## Technology

- React 18
- Vite
- Bootstrap and Bootstrap Icons
- CSS
- GitHub Pages

## Project Structure

```text
.
├── public/
│   ├── images/
│   │   └── optimized-small/  # Gallery images used by the app
│   └── favicon assets
├── src/
│   ├── App.jsx               # Gallery data and application behavior
│   ├── App.css               # Component and gallery styles
│   ├── index.css             # Global styles
│   └── main.jsx              # React entry point
├── index.html
├── package.json
└── vite.config.js            # Vite and GitHub Pages base-path config
```

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run deploy` builds and publishes `dist/` to GitHub Pages.
