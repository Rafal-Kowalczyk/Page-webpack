import '../sass/style.scss';


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