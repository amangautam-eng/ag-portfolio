/* =====================================================
   AG PORTFOLIO
   File        : navbar.js
   Version     : v1.0.1
   Description : Navigation Controller
===================================================== */

const Navbar = {

    header: document.getElementById("header"),

    menu: document.getElementById("nav-menu"),

    toggle: document.getElementById("menu-toggle"),

    links: document.querySelectorAll(".nav-link"),

    sections: document.querySelectorAll("main section"),


    init() {

        this.bindEvents();

        this.updateActiveLink();

        this.handleScroll();

    },


    bindEvents() {

        window.addEventListener(
            "scroll",
            () => {

                this.handleScroll();

                this.updateActiveLink();

            }
        );

        this.toggle.addEventListener(
            "click",
            () => this.toggleMenu()
        );

        this.links.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    this.closeMenu();

                }
            );

        });

        document.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Escape") {

                    this.closeMenu();

                }

            }
        );

    },


    handleScroll() {

        if (window.scrollY > 20) {

            this.header.classList.add("scrolled");

        } else {

            this.header.classList.remove("scrolled");

        }

    },


    toggleMenu() {

        this.menu.classList.toggle("show");

        this.toggle.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    },


    closeMenu() {

        this.menu.classList.remove("show");

        this.toggle.classList.remove("active");

        document.body.classList.remove("menu-open");

    },


    updateActiveLink() {

        let current = "";

        this.sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight

            ) {

                current = section.id;

            }

        });

        this.links.forEach(link => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") === `#${current}`

            ) {

                link.classList.add("active");

            }

        });

    }

};


document.addEventListener(
    "DOMContentLoaded",
    () => {

        Navbar.init();

    }
);