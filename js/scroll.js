/**
 * Smooth Scrolling
 */

export function initScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener('click', event => {

            event.preventDefault();

            const target = document.querySelector(

                link.getAttribute('href')

            );

            if (!target) return;

            target.scrollIntoView({

                behavior: 'smooth'

            });

        });

    });

}