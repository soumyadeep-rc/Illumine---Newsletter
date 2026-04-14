# Illumine '26 | Silver Jubilee Newsletter

A cyberpunk-themed, interactive web newsletter built for **Illumine '26**, the 25th-anniversary reunion event of the Department of Information Technology at Jadavpur University. 

This project uses a custom, purely CSS-driven aesthetic to create a retro-futuristic terminal vibe, complete with dot-matrix typography, animated deep-dive plasma backgrounds, and scroll-triggered neon glows.

## Features

* **Cyberpunk UI/UX:** A dark mode, high-contrast neon design using cyan (`#66FCF1`) and purple (`#D902EE`) accents.
* **Scroll-Triggered Neon Focus:** Uses the native JavaScript `IntersectionObserver` to detect when cards enter the viewport, lighting them up dynamically (perfect for mobile and cursor-less browsing).
* **Dot-Matrix Typography:** A custom CSS background-clipping technique to create authentic, glowing circular LED text without needing restrictive external pixel fonts.
* **Alternating Timelines:** Clean, responsive alternating flex-rows to display Goodwill Messages, Recent Activities, and Events without vertical stretching or awkward cropping.
* **Animated Deep Dive Matrix:** A 3-layer pure CSS background featuring an infinitely fading 3D grid, soft-drifting plasma orbs, and CRT scanlines.
* **Hidden Easter Eggs:** Includes console logs for curious developers and a hidden "Drop Production DB" button at the footer.

## Tech Stack

* **Framework:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/) (for lightning-fast HMR and building)
* **Styling:** Pure Custom CSS3 (Flexbox, CSS Grid, CSS Animations, Custom Properties)
