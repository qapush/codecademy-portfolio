// Toggle mobile menu button

const mobileMenuButton = document.querySelector('.hamburger');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('is-active')
})

// Hide mobile menu when mobile menu itgem clicked

document.querySelectorAll('.menu--mobile a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuButton.classList.remove('is-active');
    })
})

// Center lottie animation
const player = document.querySelector('.lottie');
player.shadowRoot.querySelector('.main').style.margin = 'auto';
player.shadowRoot.querySelector('.animation').style.margin = 'auto';


// GAME

const baseUrl = './assets/img/game/';
const cardsWrapper = document.querySelector('.game-cards');
const urls = [
    `${baseUrl}c1.jpg`,
    `${baseUrl}c2.jpg`,
    `${baseUrl}c3.jpg`,
    `${baseUrl}c4.jpg`,
    `${baseUrl}c5.jpg`,
    `${baseUrl}c6.jpg`,
    `${baseUrl}c7.jpg`,
    `${baseUrl}c8.jpg`,
]
const images = [...urls, ...urls];

const shuffleImages = () => {
    for (let i = 0; i < images.length; i++) {
        const random = Math.floor(Math.random() * images.length);
        [images[i], images[random]] = [images[random], images[i]]
    }
}

const setupImages = () => {
    cardsImages.forEach((card, index) => {
        card.src = images[index];
    })
}

const populateCards = () => {
    images.forEach((item, index) => {
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        card.dataset.index = index;
        card.classList.add('game-card');
        cardImage.src = item;
        card.appendChild(cardImage);
        cardsWrapper.appendChild(card);
    })
}



shuffleImages();
populateCards();
// setupImages();
// const cardsImages = document.querySelectorAll('.game-card img');