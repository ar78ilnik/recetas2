        (() => {
        const buttonNav = document.querySelector('.button_nav');
        const navHeader = document.querySelector('.nav_header');
        buttonNav.addEventListener('click', () => {
        let expanded = buttonNav.getAttribute('aria-expanded') === 'true' || false;
        buttonNav.setAttribute('aria-expanded', !expanded);
        buttonNav.classList.toggle('button_nav--open');
        navHeader.classList.toggle('nav_header--open');
        });
        })();