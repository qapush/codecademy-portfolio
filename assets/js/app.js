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
let cardSelected = [];
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

const revealCard = (card) => {
    const cardIndex = +card.dataset.index;
    const cardImage = images[cardIndex];
    card.src = cardImage
    cardSelected.push({
        cardIndex, 
        cardImage
    });

}

const isAlreadySelected = cardToCheck => {
    return cardSelected.some( card => card.cardIndex === +cardToCheck.dataset.index);
}

const match = () => {
    cardSelected.forEach(card => {
        cards[card.cardIndex].firstChild.style.border = '2px solid lime';
        cards[card.cardIndex].removeEventListener('click', handleClick);
    })
    cardSelected = [];
}

const hideCards = () => {
    cardSelected.forEach( item => {
        console.log(cards[item.cardIndex]);
        cards[item.cardIndex].firstChild.src = baseUrl + 'pattern.jpg';
    })
    cardSelected = [];
}

const handleClick = (e) => {

    const card = e.target;

    if(cardSelected.length < 2 && !isAlreadySelected(card)){
        revealCard(card);
    }  
    
    if (cardSelected.length === 2 && cardSelected[0].cardImage === cardSelected[1].cardImage){
       match();
    }  

    if (cardSelected.length === 2 && cardSelected[0].cardImage !== cardSelected[1].cardImage){
        setTimeout(hideCards, 1000);
    }  

    

    
}


const startNewGame = () => {
    clearBoard();
    shuffleImages();
    populateCards();
    addListeners();
}

startNewGame();

