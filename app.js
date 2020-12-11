const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = 'navLinkFade 0.5s ease forwards 0.5s';
            }
        });

        burger.classList.toggle('toggle');
    });

}

navSlide();
const texts = ["Working hard to minimize the distance between what I'm and what I want to be.", "I wonder how I look from my future me point of view!!!"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 100);

}());