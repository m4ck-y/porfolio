# FUI HUD Design System

A futuristic sci-fi user interface design system inspired by Marvel movies (JARVIS/Iron Man) and AAA video games.

## Overview

Complete FUI (Fictional User Interface) component library featuring a cyberpunk/tech aesthetic with cyan accent colors, scanlines, holographic effects, and animated elements.

## Design Specifications

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Cyan | `#00ffff` | Main accent, borders, text |
| Cyan Dim | `#00ffff40` | Subtle borders, secondary elements |
| Cyan Glow | `#00ffff80` | Hover states, active elements |
| Warning Orange | `#ff6600` | Warning states |
| Danger Red | `#ff0040` | Error states |
| Success Green | `#00ff00` | Success indicators |
| Background Dark | `#030508` | Base background |

### Typography

- **Primary Font**: Rajdhani (Google Fonts) - weights 300-700
- **Monospace Font**: Share Tech Mono (Google Fonts)
- **Font Sizes**: Mix of readable text (14-16px) and "fake data" (8-10px)

### Visual Effects

- **Scanlines**: Animated horizontal lines overlay
- **Grid Background**: Subtle 20px grid pattern
- **Glow Effects**: Box-shadow with cyan tones
- **Backdrop Blur**: Frosted glass effect on panels
- **Corner Brackets**: Decorative frame elements
- **Clip-path**: Angular panel edges

## File Structure

```
fui_hud/
├── hud_ui.html                    # Login page with FUI design + AI Assistant
├── components.html                # Component library preview (FUI style)
├── glassmorfismo.components.html  # Component library preview (Glassmorphism style)
└── README.md                      # This documentation
```

## Features

### AI Assistant (JARVIS)

- Floating button with pulse/orbit animation
- Modal chat interface with JARVIS branding
- Real-time message exchange simulation
- Typing indicator animation

### Login Page

- Futuristic login form with focus animations
- Crosshair and rotating arcs in center
- Corner brackets and data blocks
- Real-time clock display
- Animated loading bar

## Components Library

### Form Elements

- Text Input (with animated underline focus)
- Email Input
- Password Input
- Number Input
- Date/Time/DateTime Pickers
- File Input
- Select Dropdown (single & multiple)
- Checkbox & Radio Buttons
- Toggle Switches
- Sliders/Range Inputs

### UI Elements

- Buttons: Primary, Secondary, Success, Danger, Disabled
- Animated "Initiate" Button (shimmer + glow)
- Progress Bars (normal, warning, danger)
- Accordions
- Data Tables with badges
- Badges/Tags: Info, Success, Warning, Danger
- Pill Buttons
- Info Cards
- Tooltips

### Decorative Elements

- Corner Brackets (tl, tr, bl, br)
- Data Pills
- Status Indicators (online, warning, offline with pulse)
- Header Bars with control dots
- Info Rows (key-value pairs)
- Decorated Cards with border glow
- FUI Chips with icons

### Textures & Backgrounds

- Grid Pattern: Dots, Lines, Cross, Hex
- Card texture variations
- Decorative Chips

### Typography

- Title Styles: `// MAIN`, `:: LABEL ::`, `[ SECTION ]`
- Fake Data examples (coordinates, timestamps, sys IDs)
- Decorative Symbols: `◈ ◉ ○ ● ► ▸ ▹ ▣ ☐ ☑ ◆ ◇ ▼ △`
- Box Drawing: `┌ ┐ └ ┘ │ ─ ├ ┤ ┬ ┴ ┼`
- Brackets: `[ ] { } < > ( ) / \`
- Font Weights: Light(300) to Bold(700)

### Animations

- Initiate Button (shimmer + glow pulse)
- Pulsing Dots (multiple colors)
- Spinners (various sizes)
- Loading Bars
- Scan Line
- Blink Effects (normal, fast, flicker)
- Typewriter Effect
- Shimmer Effect
- Breathing/Scale Animation

### System Logs

- HTTP Access Log (scrolling with status codes)
- Systemd Journal
- Kernel Messages

### Tickers & Alerts

- Crypto Ticker Tape (scrolling prices)
- Alert Banners (optimal, warning, critical)
- Stock Ticker
- Network Traffic Monitor

## Glassmorphism Variant

The `glassmorfismo.components.html` file contains all the same components as `components.html` but styled with **glassmorphism** effects for visual contrast comparison.

### Glassmorphism Design Features

- **Frosted Glass Cards**: `backdrop-filter: blur(20px)` with translucent backgrounds
- **Rounded Corners**: `border-radius: 16px` on cards, `8px` on inputs/buttons
- **Gradient Accents**: Cyan + purple gradient highlights on top borders
- **Floating Orbs**: Background blur orbs (`filter: blur(80px)`) for ambient depth
- **Glow Effects**: Multi-layer `box-shadow` on focus/hover states
- **Glass Inputs**: Frosted input fields with triple-layer glow on focus
- **Glass Buttons**: Primary, Secondary, Success, Danger, Accent, Initiate (with shimmer)
- **Glass Checkboxes & Radios**: Frosted marks with glow on checked state
- **Glass Select**: Styled dropdown with custom arrow
- **Glass Toggles**: Pill toggles with neon glow on active
- **Glass Sliders**: Gradient thumb (cyan → purple)
- **Rounded Badges & Pills**: Pill-shaped badges with frosted backgrounds
- **Glass Tooltips**: Frosted popover on hover
- **Glass Accordion**: Rounded expandable sections
- **Glass Table**: Rounded wrapper with frosted headers
- **Glass Toasts/Notifications**: Left-border gradient indicators per type
- **Glass Log Viewer**: Frosted terminal-style log windows
- **Glass Tickers**: Frosted scrolling data streams
- **Glass Alert Banners**: Rounded alert bars with pulse animation

## Animation Effects

| Effect | Description |
|--------|-------------|
| Scanlines | Horizontal scrolling lines |
| Pulse | Crosshair dot breathing |
| Shimmer | Button light sweep |
| Flicker | Occasional text flicker |
| Rotate Arc | Spinning data rings |
| Loading | Moving progress gradient |
| Typing | Typewriter text effect |
| Breathe | Scale up/down animation |
| Ticker | Infinite horizontal scroll |

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS custom properties (CSS variables)
- CSS backdrop-filter (fallback for older browsers)

## Usage

1. Open `hud_ui.html` in a browser
2. Click **[ COMPONENTS PREVIEW ]** to see all FUI-style components
3. Click **[ GLASSMORPHISM ]** to see all components in glassmorphism style
4. Click the **AI Assistant** button (bottom-right) to open JARVIS chat

## Customization

Modify CSS variables in `:root` to change the color scheme:

```css
:root {
  --primary: #00ffff;
  --primary-dim: #00ffff40;
  --secondary: #00ffff20;
  --warning: #ff6600;
  --bg-dark: #030508;
}
```

## License

MIT - Free for personal and commercial use.
