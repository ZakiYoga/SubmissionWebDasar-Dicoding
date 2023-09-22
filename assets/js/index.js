const navbar = document.querySelector('.header-navbar');
const drop_down = document.getElementById('btn_dropdown')
const drop_downContent = document.getElementById('dropdown_content');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(20, 108, 148, 0.9)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

drop_down.addEventListener('click', () => {
    if (drop_downContent.style.display === 'block') {
        drop_downContent.style.display = 'none';
    } else {
        drop_downContent.style.display = 'block';
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== drop_down && event.target !== drop_downContent) {
        drop_downContent.style.display = 'none';
    }
});
