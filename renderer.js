// renderer.js (Renderer JS)
const clockEl = document.getElementById('clock');
function updateTime() {
    const now = new Date();
    // Format HH:MM:SS
    const timeString = now.toLocaleTimeString();
    clockEl.innerText = timeString;
}
setInterval(updateTime, 1000);
updateTime();
