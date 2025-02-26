# Binaural Beats Generator

A web-based application that generates binaural beats to help users explore different states of consciousness and brain wave patterns. This tool creates slightly different frequencies in each ear, which the brain processes as a beat at the frequency difference between the tones.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Brain Wave States](#brain-wave-states)
- [How to Use](#how-to-use)
- [Installation](#installation)
- [Deployment](#deployment)
  - [Shared Hosting](#shared-hosting)
  - [GitHub Pages](#github-pages)
- [Technical Details](#technical-details)
- [Important Notes](#important-notes)

## Overview

Binaural beats occur when two different tones are played in each ear, and the brain perceives a third "phantom" beat that corresponds to the difference between these tones. This application allows you to explore different brain wave states by generating these beats at specific frequencies.

The application was created with the goal of facilitating states where, as Nikola Tesla once described: "My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists."

## Features

- Five preset brain wave patterns (Delta, Theta, Alpha, Beta, Gamma)
- Customizable carrier frequency (base tone)
- Adjustable beat frequency to target specific brain states
- Volume control
- Real-time frequency display
- Mobile-friendly interface
- Works with any modern web browser

## Brain Wave States

The application provides presets for the main types of brain waves:

| State | Frequency | Description |
|-------|-----------|-------------|
| Delta | 0.5-4 Hz | Deep sleep, healing, dreamless rest |
| Theta | 4-8 Hz | Meditation, creativity, REM sleep, intuitive states |
| Alpha | 8-13 Hz | Relaxation, calm alertness, mind/body integration |
| Beta | 13-30 Hz | Concentration, alertness, focused mental activity |
| Gamma | 30-100 Hz | Higher cognitive functioning, peak performance |

## How to Use

1. **Wear headphones** - This is essential for binaural beats to work properly
2. Choose a brain wave preset or customize your own frequencies
3. Click the "Play" button to start generating the beats
4. Adjust the volume to a comfortable level
5. Start with short sessions (5-15 minutes) and gradually increase duration
6. For the "universal receiver" state described above, try the Theta preset (4-8 Hz)

## Installation

The simplest way to use this application is to download the index.html file and open it in any web browser:

1. Download the index.html file
2. Open it in your web browser
3. No additional installation or dependencies required

For local testing with a server:
```bash
# Install a simple HTTP server if needed
npm install -g serve

# Serve the current directory
serve
```

## Deployment

### Shared Hosting

To deploy on standard shared hosting:

1. Upload the index.html file to your hosting provider via FTP
2. Access through your domain name

If encountering 404 errors on shared hosting, create a .htaccess file with appropriate redirects:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### GitHub Pages

1. Clone this repository
2. Your application will be available at https://your-username.github.io/binaural-beats-generator/

To set up GitHub Pages for your own fork:
1. Fork this repository
2. Go to repository Settings → Pages
3. Select the main branch as source
4. Save to enable GitHub Pages

## Technical Details

- **Audio Generation**: Uses the Tone.js library to create and manipulate sound waves
- **Interface**: Built with HTML, CSS, and JavaScript
- **Styling**: Uses Tailwind CSS for responsive design
- **Self-contained**: All dependencies included via CDN for easy deployment

## Important Notes

- **Headphones are required** for binaural beats to work properly
- Start with shorter sessions (5-15 minutes) and lower volumes
- If you experience any discomfort, stop immediately
- Binaural beats may not be suitable for people with seizure disorders
- The effects of binaural beats vary from person to person
- This tool is for exploration and is not intended to treat, diagnose, or cure any medical condition
- Consistent practice over time may yield better results than occasional use