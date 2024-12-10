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

new Swiper('.swiper', {
    loop: true, // Habilita o loop infinito
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite clicar nas bolinhas da paginação
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Mostra 1 slide por vez
    spaceBetween: 20, // Espaçamento entre os slides
});
