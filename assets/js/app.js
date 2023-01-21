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


/* 
    
 ██████╗  █████╗ ███╗   ███╗███████╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██║  ███╗███████║██╔████╔██║█████╗  
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
                                    

*/


// ===> VARIABLES

const baseUrl = './assets/img/game/';
const game = document.querySelector('#game');
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
let cardSelected = null;
let cards = null;

// ===> FUNCTIONS

const shuffleImages = () => {
    for (let i = 0; i < images.length; i++) {
        const random = Math.floor(Math.random() * images.length);
        [images[i], images[random]] = [images[random], images[i]]
    }
}

const clearBoard = () => {
    if(document.querySelector('#game .game-cards')) document.querySelector('#game .game-cards').remove();
}

const populateCards = () => {
    const board = document.createElement('div');
    board.classList.add('game-cards');
    images.forEach((item, index) => {
        const oneCard = document.createElement('div');
        const cardImage = document.createElement('img');
        cardImage.dataset.index = index;
        cardImage.dataset.opened = false;
        oneCard.classList.add('game-card');
        cardImage.src = baseUrl + 'pattern.jpg';
        oneCard.appendChild(cardImage);
        board.appendChild(oneCard);
    })
    cards = board.querySelectorAll('.game-card');
    game.appendChild(board);
}

const addListeners = () => {
   images.forEach( (item, index) => {
    cards[index].addEventListener('click', handleClick)
   } )
}




const handleClick = (e) => {

    if(!cardSelected){
        e.target.src = images[e.target.dataset.index]; 
        e.target.dataset.opened = 'true'; 
    }

}


const startNewGame = () => {
    clearBoard();
    shuffleImages();
    populateCards();
    addListeners();
}

startNewGame();

