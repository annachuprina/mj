# MJ Styles

A static gallery of Midjourney style references curated by Anna Chuprina.

## About

This project showcases a collection of unique Midjourney AI-generated image styles with their corresponding style references (--sref codes). Each day, the gallery order is randomized to highlight different combinations of styles.

## Features

- Gallery of Midjourney styles
- Daily randomized image order (consistent throughout the day)
- One-click copy to clipboard for style reference codes
- Responsive gallery layout
- Lightweight static site (no backend required)

## Run Locally

```bash
npm start
```

The app is served with Python's built-in static file server. By default it uses:

```text
http://localhost:3000
```

If port 3000 is busy, start another port manually:

```bash
python3 -m http.server 3001
```

## Usage

1. Open the gallery in your browser
2. Browse through the Midjourney style examples
3. Click "COPY STYLE" button to copy the style reference code
4. Use the copied code in your Midjourney prompts with `--sref [code]`

## Technologies

- React
- Bootstrap Icons
- Vanilla CSS
- Python HTTP Server

## How It Works

- Images are randomized daily based on the current date
- The same shuffled order appears to all visitors on a given day
- Order resets and regenerates at midnight UTC

## File Structure

```
/src
  - App.jsx          # React component
  - App.css          # Styling
  - index.css        # Global styles
  - main.jsx         # Entry point
/public
  - *.png            # Gallery images (1.png - 40.png)
```
