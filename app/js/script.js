    var mainBlock = document.querySelector('.header__menu');
    var svgImg = mainBlock.querySelector('.header__icon');
    mainBlock.addEventListener('click', function() {
        let expanded = mainBlock.getAttribute('aria-expanded') === 'true' || false;
        mainBlock.setAttribute('aria-expanded', !expanded);
        svgImg.classList.toggle('rotated');
    });