// Place your music file (e.g., mp3) in the project folder and update the src below if needed.
// This script adds play/pause controls for background music.

// Create audio element
var audio = new Audio('music.mp3'); // Change to your music file name if needed
// Loop the music
audio.loop = true;

// Create play/pause button
var btn = document.createElement('button');
btn.id = 'music-btn';
btn.textContent = 'Play Music';
btn.style.position = 'fixed';
btn.style.top = '30px';
btn.style.right = '30px';
btn.style.zIndex = 1000;
btn.style.padding = '12px 24px';
btn.style.fontSize = '18px';
btn.style.background = '#ff69b4';
btn.style.color = '#fff';
btn.style.border = 'none';
btn.style.borderRadius = '8px';
btn.style.cursor = 'pointer';
btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';

document.body.appendChild(btn);

var isPlaying = false;

btn.onclick = function() {
    if (isPlaying) {
        audio.pause();
        btn.textContent = 'Play Music';
    } else {
        audio.play();
        btn.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
};
