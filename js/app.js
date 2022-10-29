/**
 * SubMenu navigation
 */
const nav_button = document.querySelector('.nav-button');
const sp = nav_button.querySelector('.sp-2');
const menu = document.querySelector('ul');
const to_top_button = document.querySelector('#toTop');

nav_button.addEventListener('click', e => {
    menu.classList.toggle('show-menu')
})


to_top_button.addEventListener('click', e => {
    window.scrollTo = 0;
})


/**
 * Sticky navigation bar
 */
const header = document.querySelector('.header');
window.addEventListener('scroll', e => {
    if ((window.scrollY > 0) && (window.scrollY >= 68)) {
        header.classList.add('header-sticky');
        to_top_button.classList.add('show-to-top')
    } else {
        header.classList.remove('header-sticky');
        to_top_button.classList.remove('show-to-top')
    }
})

