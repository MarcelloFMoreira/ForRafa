const button = document.querySelector('.Play');
const img = button.querySelector('img');

button.addEventListener('click', function () {
    const audio = document.querySelector('audio');
    if (audio.paused) { 
        audio.play();   
        img.src = 'img/pause-solid 1.png'
        img.alt = 'Ouvir'
    } else {            
        audio.pause();  
        img.src = 'img/play-solid 1.png'
        img.alt = 'Pausar'
    }
});