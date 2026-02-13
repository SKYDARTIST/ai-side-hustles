const fs = require('fs');
const path = require('path');

const src = '/Users/cryptobulla/.gemini/antigravity/brain/c66cec81-6d5a-4278-916d-b9de78354a2d/jio_moment_manga_art_clean_1771017508911.png';
const dest = path.join(__dirname, 'public/images/jio-moment-ai.png');

try {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied image to:', dest);
} catch (err) {
    console.error('Failed to copy image:', err);
    process.exit(1);
}
