import { $ } from './utils.js';

export function initNavbar() {

    const navbar = $('.header');

    if (!navbar) return;

    window.addEventListener('scroll', () => {

        navbar.classList.toggle(

            'scrolled',

            window.scrollY > 20

        );

    });

}