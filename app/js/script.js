    const mainBlock = document.querySelector('.header__menu'),
        svgImg = mainBlock.querySelector('.header__icon'),
        menuMain = document.querySelector('.menu_main');
    mainBlock.addEventListener('click', function() {
        let expanded = mainBlock.getAttribute('aria-expanded') === 'true' || false;
        mainBlock.setAttribute('aria-expanded', !expanded);
        svgImg.classList.toggle('rotated');
        menuMain.classList.toggle('menu_opened');
    });