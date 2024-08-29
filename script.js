// script.js
document.addEventListener('DOMContentLoaded', () => {
    const octopus = document.querySelector('.octopus');
    
    octopus.addEventListener('click', () => {
        octopus.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
});
