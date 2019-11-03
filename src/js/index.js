import '../sass/style.scss';
import $ from 'jquery';


// scroll top page
$('.arrow-top__img').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});

// sidebar
const sidebarBtn = document.querySelector('#menu-hamburger'),
    sidebarBox = document.querySelector('#menu-content');


sidebarBtn.addEventListener('click', function (event) {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});

sidebarBox.addEventListener('click', function (event) {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});

// ScrollReveal
ScrollReveal().reveal('span', {
    delay: 200,
    duration: 600
});