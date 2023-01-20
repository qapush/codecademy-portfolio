// Mobile menu button

const mobileMenuButton = document.querySelector('.hamburger');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('is-active')
})

document.querySelectorAll('.menu--mobile a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuButton.classList.remove('is-active');
    })
})

// Center lottie animation
const player = document.querySelector('.lottie');
player.shadowRoot.querySelector('.main').style.margin = 'auto';
player.shadowRoot.querySelector('.animation').style.margin = 'auto';