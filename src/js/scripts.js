AOS.init({delay:100, duration: 600});

const menu = {classeMobile: '.mobile-menu'}

function menuShow(){    
    const menuMobile = document.querySelector(menu.classeMobile);

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icone-menu-mobile').src = "src/images/menu-mobile/button_mobile.svg";
    } else {
        document.querySelector('header').classList.remove('esconder')
        menuMobile.classList.add('open');
        document.querySelector('.icone-menu-mobile').src = "src/images/menu-mobile/close_mobile.svg";
    }

    setTimeout( () => {
        document.querySelector('header').classList.add('esconder')
        document.querySelector('.icone-menu-mobile').src = "src/images/menu-mobile/button_mobile.svg";
    }, 4000)
}