/**
 * Scroll Reveal Animations
 */

export function initAnimations() {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('fade-in');

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    document.querySelectorAll('.section').forEach(section => {

        observer.observe(section);

    });

}