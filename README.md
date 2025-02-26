# Binaural Beats Generator

A web-based application that generates binaural beats to help users explore different states of consciousness and brain wave patterns. This tool creates slightly different frequencies in each ear, which the brain processes as a beat at the frequency difference between the tones.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Brain Wave States](#brain-wave-states)
- [How to Use](#how-to-use)
- [Installation](#installation)
  - [Option 1: Standalone HTML File](#option-1-standalone-html-file)
  - [Option 2: React Application](#option-2-react-application)
- [Deployment](#deployment)
  - [Shared Hosting](#shared-hosting)
  - [GitHub Pages](#github-pages)
- [Development Process](#development-process)
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

### Option 1: Standalone HTML File

The simplest way to use this application is to download the standalone.html file and open it in any web browser.

1. Download the standalone.html file
2. Open it in your web browser
3. No additional installation or dependencies required

### Option 2: React Application

For developers who want to modify or extend the application:

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/binaural-beats-generator.git
   cd binaural-beats-generator
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Deployment

### Shared Hosting

To deploy on standard shared hosting:

1. Use the standalone.html file for the simplest deployment
2. Upload the file to your hosting provider via FTP
3. Rename to index.html if you want it to be the default page
4. Access through your domain name

If using the React application version:

1. Build the project using `npm run build`
2. Upload the contents of the dist/ or build/ folder to your hosting provider
3. If encountering 404 errors, create a .htaccess file with appropriate redirects:
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

1. Create a GitHub repository for your project
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/binaural-beats-generator.git
   git push -u origin main
   ```
3. Enable GitHub Pages in your repository settings
4. Select the branch and folder to deploy from
5. Your application will be available at https://your-username.github.io/binaural-beats-generator/

## Development Process

This application was developed through the following stages:

1. Initial research into brain wave patterns and binaural beats
2. Design of the user interface with a focus on simplicity and ease of use
3. Implementation of the audio generation using the Tone.js library
4. Creation of presets based on established brain wave frequency ranges
5. Development of both React component and standalone HTML versions
6. Testing across different browsers and devices
7. Deployment to web hosting

## Technical Details

- **Audio Generation**: Uses the Tone.js library to create and manipulate sound waves
- **Interface**: Built with HTML, CSS, and JavaScript
- **Styling**: Uses Tailwind CSS for responsive design
- **React Version**: Implements the application as a React component for better state management
- **Standalone Version**: Self-contained HTML file with all dependencies included via CDN

## Important Notes

- **Headphones are required** for binaural beats to work properly
- Start with shorter sessions (5-15 minutes) and lower volumes
- If you experience any discomfort, stop immediately
- Binaural beats may not be suitable for people with seizure disorders
- The effects of binaural beats vary from person to person
- This tool is for exploration and is not intended to treat, diagnose, or cure any medical condition
- Consistent practice over time may yield better results than occasional use
